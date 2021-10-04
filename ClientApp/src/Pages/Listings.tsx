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
                  <option value="adoptions">Adoptions</option>
                  <option value="dining">Dining Out</option>
                  <option value="grooming">Grooming</option>
                  <option value="medical">Medical</option>
                  <option value="pet-care">Pet Care</option>
                  <option value="recreation">Recreation</option>
                  <option value="residential">Residential</option>
                  <option value="shopping">Shopping</option>
                  <option value="vacation">Vacation</option>
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
                <i className="adoptions-icon fas fa-heart"></i>&nbsp;Adoptions
              </li>
              <li>
                <i className="dining-icon fas fa-utensils"></i>
                &nbsp;Dining Out
              </li>
              <li>
                <i className="grooming-icon fas fa-bath"></i>&nbsp;Grooming
              </li>
              <li>
                <i className="medical-icon fas fa-clinic-medical"></i>
                &nbsp;Medical
              </li>
              <li>
                <i className="pet-care-icon fas fa-paw"></i>&nbsp;Pet Care
              </li>
              <li>
                <i className="recreation-icon fas fa-dog"></i>&nbsp;Recreation
              </li>
              <li>
                <i className="residential-icon fas fa-home"></i>
                &nbsp;Residential
              </li>
              <li>
                <i className="shopping-icon fas fa-shopping-cart"></i>
                &nbsp;Shopping
              </li>
              <li>
                <i className="travel-icon fas fa-bed"></i>&nbsp;Vacation
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
              listing.listingType === 'pet-care' ? (
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
              ) : listing.listingType === 'dining' ? (
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
              ) : listing.listingType === 'recreation' ? (
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
              ) : listing.listingType === 'shopping' ? (
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
              ) : listing.listingType === 'residential' ? (
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
              ) : listing.listingType === 'grooming' ? (
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
              ) : listing.listingType === 'adoptions' ? (
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
              ) : listing.listingType === 'vacation' ? (
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
              ) : listing.listingType === 'medical' ? (
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
