using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Geocoding.Microsoft;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using StPetePet.Models;

namespace StPetePet.Controllers
{
    // All of these routes will be at the base URL:     /api/Listings
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case ListingsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class ListingsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;
        private readonly string BING_MAPS_KEY;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public ListingsController(DatabaseContext context, IConfiguration config)

        {
            _context = context;
            BING_MAPS_KEY = config["BING_MAPS_KEY"];
        }

        // GET: api/Listings
        //
        // Returns a list of all your Listings
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Listing>>> GetListings(string filter)
        {
            // Uses the database context in `_context` to request all of the Listings, sort
            // them by row id and return them as a JSON array.

            if (filter == null)
            {
                return await _context.Listings.OrderBy(row => row.Name).ToListAsync();
            }
            else
            {
                return await _context.Listings.OrderBy(row => row.Name).
                Where(listing => listing.Name.ToLower().Contains(filter.ToLower()) ||
                listing.ListingType.ToLower().Contains(filter.ToLower())).
                ToListAsync();
            }
        }
        // GET: api/Listings/5
        //
        // Fetches and returns a specific listing by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Listing>> GetListing(int id)
        {
            // Find the listing in the database using `FindAsync` to look it up by id
            var listing = await _context.Listings.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (listing == null)
            {
                // Return a `404` response to the client indicating we could not find a listing with this id
                return NotFound();
            }

            //  Return the listing as a JSON object.
            return listing;
        }

        // PUT: api/Listings/5
        //
        // Update an individual listing with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Listing
        // variable named listing. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Listing POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutListing(int id, Listing listing)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != listing.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in listing to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from listing
            _context.Entry(listing).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!ListingExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(listing);
        }

        // POST: api/Listings
        //
        // Creates a new listing in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Listing
        // variable named listing. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Listing POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<Listing>> PostListing(Listing listing)
        {
            // Create a new geocoder
            var geocoder = new BingMapsGeocoder(BING_MAPS_KEY);

            // Request this address to be geocoded.
            var geocodedAddresses = await geocoder.GeocodeAsync(listing.Address);

            // ... and pick out the best address sorted by the confidence level
            var bestGeocodedAddress = geocodedAddresses.OrderBy(address => address.Confidence).FirstOrDefault();

            // If we have a best geocoded address, use the latitude and longitude from that result
            if (bestGeocodedAddress != null)
            {
                listing.Latitude = bestGeocodedAddress.Coordinates.Latitude;
                listing.Longitude = bestGeocodedAddress.Coordinates.Longitude;
            }

            // Set the UserID to the current user id, this overrides anything the user specifies.
            listing.UserId = GetCurrentUserId();

            // Indicate to the database context we want to add this new record
            _context.Listings.Add(listing);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetListing", new { id = listing.Id }, listing);
        }

        // DELETE: api/Listings/5
        //
        // Deletes an individual listing with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteListing(int id)
        {
            // Find this listing by looking for the specific id
            var listing = await _context.Listings.FindAsync(id);
            if (listing == null)
            {
                // There wasn't a listing with that id so return a `404` not found
                return NotFound();
            }

            // If the current user (which we trust the ID since it comes from the JWT)
            // is exactly the same ID recorded in the restaurant, then allow this.
            // Otherwise, if they don't match, tell the user "UNAUTHORIZED" and do not proceed.
            if (listing.UserId != GetCurrentUserId())
            {
                // Make a custom error response
                var response = new
                {
                    status = 401,
                    errors = new List<string>() { "Not Authorized" }
                };

                // Return our error with the custom response
                return Unauthorized(response);
            }

            // Tell the database we want to remove this record
            _context.Listings.Remove(listing);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(listing);
        }

        // Private helper method that looks up an existing listing by the supplied id
        private bool ListingExists(int id)
        {
            return _context.Listings.Any(listing => listing.Id == id);
        }

        // Private helper method to get the JWT claim related to the user ID
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}
