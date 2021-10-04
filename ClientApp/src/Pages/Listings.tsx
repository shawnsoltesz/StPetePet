import React, { useState } from 'react'
import { useQuery } from 'react-query'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'
import { Link } from 'react-router-dom'

import { ListingType } from '../types'
import { SingleListingFromList } from '../components/Pages/SingleListingFromList'

export function Listings() {
  const [selectedMapListing, setSelectedMapListing] =
    useState<ListingType | null>(null)

  const [viewport, setViewport] = useState({
    latitude: 27.776524,
    longitude: -82.678068,
    zoom: 11.5,
  })

  const [filterText, setFilterText] = useState('')

  const { data: listings = [] } = useQuery<ListingType[]>(
    ['listings', filterText],
    async function () {
      const response = await fetch(
        filterText.length === 0
          ? 'api/listings'
          : `/api/listings?filter=${filterText}`
      )
      return response.json()
    }
  )

  return (
    <>
      <main>
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>{' '}
                <u>
                  <Link to="/">Home</Link>
                </u>
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-search"></i>&nbsp;Search
                Listings
              </p>
            </li>
          </ul>
        </div>

        <h1 className="listing-name">Sniffin Around...</h1>
        <div className="search-nav">
          <div className="search-options">
            <div className="search-box">
              <h2>Search by Name or Type:&nbsp; </h2>
              <form className="search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={filterText}
                  onChange={function (event) {
                    setFilterText(event.target.value)
                  }}
                />
              </form>
            </div>
            <div className="search-dropdown">
              <h2>Type: &nbsp; </h2>
              <form className="search" action={filterText}>
                <select name="listing-type" id="dropdown">
                  <option value="null">Select</option>
                  <option value="boarding-pet-sitters">
                    Boarding &amp; Pet Sitters
                  </option>
                  <option value="dining-drinks">Dining &amp; Drinks</option>
                  <option value="beaches-parks">Dog Beaches &amp; Parks</option>
                  <option value="food-supplies">Food &amp; Supplies</option>
                  <option value="for-rent">For Rent</option>
                  <option value="grooming-specialty">
                    Grooming &amp; Specialty Services
                  </option>
                  <option value="pet-adoptions">Pet Adoptions</option>
                  <option value="shopping">Shopping</option>
                  <option value="travel">Travel</option>
                  <option value="vet">Veterinarians</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="key-types">
          <div className="key-header">
            <p>
              <strong>Types:&nbsp;</strong>
            </p>
          </div>

          <div className="key-icons">
            <ul>
              <li>
                <i className="key-icon fas fa-paw"></i>&nbsp;Boarding &amp; Pet
                Sitters
              </li>
              <li>
                <i className="key-icon fas fa-utensils"></i>&nbsp;Dining &amp;
                Drinks
              </li>
              <li>
                <i className="key-icon fas fa-dog"></i>&nbsp;Dog Beaches &amp;
                Parks
              </li>
              <li>
                <i className="key-icon fas fa-shopping-cart"></i>&nbsp;Food
                &amp; Supplies
              </li>
              <li>
                <i className="key-icon fas fa-home"></i>&nbsp;For Rent
              </li>
              <li>
                <i className="key-icon fas fa-bath"></i>&nbsp;Grooming &amp;
                Specialty
              </li>
              <li>
                <i className="key-icon fas fa-heart"></i>&nbsp;Pet Adoptions
              </li>
              <li>
                <i className="key-icon fas fa-shopping-bag"></i>&nbsp;Shopping
              </li>
              <li>
                <i className="key-icon fas fa-bed"></i>&nbsp;Travel
              </li>
              <li>
                <i className="key-icon fas fa-clinic-medical"></i>
                &nbsp;Veterinarians
              </li>
            </ul>
          </div>
        </div>

        <div className="map">
          <ReactMapGL
            {...viewport}
            style={{ position: 'absolute' }}
            width="100%"
            height="100%"
            onViewportChange={setViewport}
            mapboxApiAccessToken={
              import.meta.env.VITE_APP_MAPBOX_TOKEN as string
            }
          >
            <div style={{ position: 'absolute', left: 10 }}>
              <NavigationControl />
            </div>

            {selectedMapListing ? (
              <Popup
                latitude={selectedMapListing.latitude}
                longitude={selectedMapListing.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setSelectedMapListing(null)}
                offsetTop={-2}
              >
                <div className="map-link">
                  <Link to={`/listings/${selectedMapListing.id}`}>
                    {selectedMapListing.name}
                  </Link>
                  {/* <p>{selectedMapListing.description}</p> */}
                </div>
              </Popup>
            ) : null}

            {listings.map((listing) =>
              listing.listingType === 'boarding-pet-sitters' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="paw print icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-paw"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'dining-drinks' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="knife and fork icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-utensils"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'beaches-parks' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="dog icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-dog"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'food-supplies' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="shopping cart icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-shopping-cart"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'for-rent' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="house icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-home"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'grooming-specialty' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="bathing icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-bath"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'pet-adoptions' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="heart icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-heart"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'shopping' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="bag icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-shopping-bag"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'travel' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="hotel bed icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-bed"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'veterinarians' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="medical veterinarian icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="key-icon fas fa-clinic-medical"></i>
                  </span>
                </Marker>
              ) : (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span
                    role="img"
                    aria-label="blank icon"
                    onClick={() => setSelectedMapListing(listing)}
                  >
                    <i className="fas fa-question"></i>
                  </span>
                </Marker>
              )
            )}
          </ReactMapGL>
        </div>
        <div>
          <ul className="listing">
            {listings.map(function (listing) {
              return (
                <SingleListingFromList key={listing.id} listing={listing} />
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}
