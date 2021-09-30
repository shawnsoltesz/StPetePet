import React, { useState } from 'react'
import { useQuery } from 'react-query'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'
import { Link, Switch } from 'react-router-dom'

import { ListingType } from '../types'
import { SingleListingFromList } from '../components/Pages/SingleListingFromList'

export function Listings() {
  const [selectedMapListing, setSelectedMapListing] =
    useState<ListingType | null>(null)

  const [viewport, setViewport] = useState({
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 10.8,
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

        <h1 className="listing-name">Sniff Around..</h1>

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
                <option value="Boarding&nbsp;&amp;&nbsp;Pet&nbsp;Sitters">
                  Boarding&nbsp;&amp;&nbsp;Pet&nbsp;Sitters
                </option>
                <option value="Dining&nbsp;&amp;&nbsp;Drinks">
                  Dining&nbsp;&amp;&nbsp;Drinks
                </option>
                <option value="Dog&nbsp;Beaches&nbsp;&amp;&nbsp;Parks">
                  Dog&nbsp;Beaches&nbsp;&amp;&nbsp;Parks
                </option>
                <option value="For Rent">For&nbsp;Rent</option>
                <option value="Food&nbsp;&amp;&nbsp;Supplies">
                  Food&nbsp;&amp;&nbsp;Supplies
                </option>
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
        <section className="map">
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

            {listings.map((listing) => (
              <Marker
                key={listing.id}
                latitude={listing.latitude}
                longitude={listing.longitude}
              >
                <span
                  role="img"
                  aria-label="taco"
                  onClick={() => setSelectedMapListing(listing)}
                >
                  <Switch>
                    {listing.listingType}="Boarding & Pet Sitters" ?
                    <i className="fas fa-paw"></i>
                    {listing.listingType}="Dining & Drinks" ?
                    <i className="fas fa-glass-cheers"></i>
                    {listing.listingType}="Dog Beaches & Parks" ?
                    <i className="fas fa-dog"></i>: 🌮
                  </Switch>
                </span>
              </Marker>
            ))}
          </ReactMapGL>
        </section>
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
