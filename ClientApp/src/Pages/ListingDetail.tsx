import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { ListingType } from '../types'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

import fortdesoto from '../images/listings/FortDesoto.jpg'
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
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 10,
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
            <img src={fortdesoto} alt="cocker spaniel at the beach" />
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

              {listing.listingType === 'Boarding & Pet Sitters' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="paw print icon">
                    <i className="key-icon fas fa-paw"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Dining & Drinks' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="knife and fork icon">
                    <i className="key-icon fas fa-utensils"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Dog Beaches & Parks' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="dog icon">
                    <i className="key-icon fas fa-dog"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Food & Supplies' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="shopping cart icon">
                    <i className="key-icon fas fa-shopping-cart"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'For Rent' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="house icon">
                    <i className="key-icon fas fa-home"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Grooming & Specialty Services' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="bathing icon">
                    <i className="key-icon fas fa-bath"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Pet Adoptions' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="heart icon">
                    <i className="key-icon fas fa-heart"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Shopping' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="bag icon">
                    <i className="key-icon fas fa-shopping-bag"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Travel' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="hotel bed icon">
                    <i className="key-icon fas fa-bed"></i>
                  </span>
                </Marker>
              ) : listing.listingType === 'Veterinarians' ? (
                <Marker
                  key={listing.id}
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                >
                  <span role="img" aria-label="medical veterinarian icon">
                    <i className="key-icon fas fa-clinic-medical"></i>
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

        <div className="description">{listing.description}</div>
        <div className="contact-details">
          <div className="contact-buttons">
            <ul>
              <li>
                <button className="map-button">
                  <i className="fas fa-map"></i>
                </button>
              </li>
              <li>
                <button className="phone-button">
                  <i className="fas fa-phone">
                    <a href={`tel:+1${listing.phoneNumber}`} />
                  </i>
                </button>
              </li>
              <li>
                <button className="web-search-button">
                  <i className="fas fa-globe"></i>
                </button>
              </li>
            </ul>
          </div>
          <ul className="address">
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
