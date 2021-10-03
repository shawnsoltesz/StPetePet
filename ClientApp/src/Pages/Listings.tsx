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
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 11,
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

        <div className="search-options">
          <div className="search-box">
            <h2>Search by Name:&nbsp; </h2>
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
              <select name="listing-type" id="listing-type">
                <option value="Null">Select</option>
                <option value="Boarding & Pet Sitters">
                  Boarding&nbsp;&amp;&nbsp;Pet&nbsp;Sitters
                </option>
                <option value="Dining&nbsp;&amp;&nbsp;Drinks">
                  Dining&nbsp;&amp;&nbsp;Drinks
                </option>
                <option value="Dog&nbsp;Beaches&nbsp;&amp;&nbsp;Parks">
                  Dog&nbsp;Beaches&nbsp;&amp;&nbsp;Parks
                </option>
                <option value="Food&nbsp;&amp;&nbsp;Supplies">
                  Food&nbsp;&amp;&nbsp;Supplies
                </option>
                <option value="For Rent">For&nbsp;Rent</option>
                <option value="Grooming&nbsp;&amp;&nbsp;Specialty&nbsp;Services">
                  Grooming&nbsp;&amp;&nbsp;Specialty&nbsp;Services
                </option>
                <option value="Pet&nbsp;Adoptions">Pet&nbsp;Adoptions</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Veterinarians">Veterinarians</option>
              </select>
            </form>
          </div>
        </div>

        <div className="key">
          <div className="key-header">
            <h2>Key:&nbsp; </h2>
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
                offsetTop={-5}
              >
                <div>
                  <Link to={`/listings/${selectedMapListing.id}`}>
                    {selectedMapListing.name}
                  </Link>
                  {/* <p>{selectedMapListing.description}</p> */}
                </div>
              </Popup>
            ) : null}

            {listings.map((listing) =>
              listing.listingType === 'Boarding & Pet Sitters' ? (
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
              ) : listing.listingType === 'Dining & Drinks' ? (
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
              ) : listing.listingType === 'Dog Beaches & Parks' ? (
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
              ) : listing.listingType === 'Food & Supplies' ? (
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
              ) : listing.listingType === 'For Rent' ? (
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
              ) : listing.listingType === 'Grooming & Specialty Services' ? (
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
              ) : listing.listingType === 'Pet Adoptions' ? (
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
              ) : listing.listingType === 'Shopping' ? (
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
              ) : listing.listingType === 'Travel' ? (
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
              ) : listing.listingType === 'Veterinarians' ? (
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
