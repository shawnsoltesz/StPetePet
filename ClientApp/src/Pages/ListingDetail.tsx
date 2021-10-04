import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { ListingType } from '../types'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

import mural from '../images/listings/stpetepetmural-web.jpg'
import { Link } from 'react-router-dom'

async function loadOneListing(id: string) {
  const response = await fetch(`/api/listings/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

const NullListing: ListingType = {
  id: undefined,
  isActive: true,
  listingType: '',
  name: '',
  description: '',
  address: '',
  website: '',
  phoneNumber: '',
  createdDate: new Date(),
  updatedDate: new Date(),
  latitude: 0,
  longitude: 0,
}

export function ListingDetail() {
  const { id } = useParams<{ id: string }>()

  const { data: listing = NullListing } = useQuery<ListingType>(
    ['one-listing', id],
    () => loadOneListing(id)
  )

  const [viewport, setViewport] = useState({
    latitude: 27.776524,
    longitude: -82.678068,
    zoom: 11,
  })

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
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-search"></i>
                &nbsp;<Link to="/listings">Search Listings</Link>
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-list"></i>&nbsp;Listing
                Detail
              </p>
            </li>
          </ul>
        </div>

        <h1 className="listing-name">{listing.name}</h1>
        <div className="listing-graphics">
          <div className="listing-photo">
            <img
              src={mural}
              alt="stpete dot pet mural of pet friendly points of interest around St Petersburg Florida"
              width="350px"
              height="450px"
            />
          </div>

          <div className="listing-detail-map">
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

              {listing.listingType === 'pet-care' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="paw print icon">
                    <i className="pet-care-icon fas fa-paw"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'dining' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="knife and fork icon">
                    <i className="dining-icon fas fa-utensils"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'recreation' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="dog icon">
                    <i className="key-icon fas fa-dog"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'shopping' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="shopping cart icon">
                    <i className="shopping-icon fas fa-shopping-cart"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'residential' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="house icon">
                    <i className="key-icon fas fa-home"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'grooming' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="bathing icon">
                    <i className="grooming-icon fas fa-bath"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'adoptions' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="heart icon">
                    <i className="adoptions-icon fas fa-heart"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'vacation' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="hotel bed icon">
                    <i className="vacation-icon fas fa-bed"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'medical' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="medical veterinarian icon">
                    <i className="medical-icon fas fa-clinic-medical"></i>
                  </span>
                </Marker>
              ) : (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="blank icon">
                    <i className="fas fa-question"></i>
                  </span>
                </Marker>
              )}
            </ReactMapGL>
          </div>
        </div>

        <div className="contact-details">
          <ul className="address">
            <li>
              <p>{listing.description}</p>
            </li>
            <li>
              <p>
                <strong>Address: </strong>
                {listing.address}
              </p>
            </li>

            <li className="phone">
              <p>
                <strong>Phone: </strong>
                {listing.phoneNumber}
              </p>
            </li>

            <li className="website">
              <p>
                <strong>Website: </strong>
                <a className="listing-website" href={listing.website}>
                  {listing.name}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
