import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { ListingType } from '../types'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import { authHeader, getUserId } from '../auth'

import mural from '../images/stpete-mural-web.jpg'

import { Link } from 'react-router-dom'

async function loadOneListing(id: string) {
  const response = await fetch(`/api/listings/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

async function handleDelete(id: number | undefined) {
  if (id === undefined) {
    return
  }

  const response = await fetch(`/api/Listings/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: authHeader(),
    },
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

const NullListing: ListingType = {
  id: undefined,
  userId: 0,
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
  photoURL: '',
}

export function ListingDetail() {
  const history = useHistory()

  const deleteRestaurant = useMutation(handleDelete, {
    onSuccess: function () {
      history.push('/')
    },
    onError: function () {},
  })

  const { id } = useParams<{ id: string }>()

  const { data: listing = NullListing } = useQuery<ListingType>(
    ['one-listing', id],
    () => loadOneListing(id)
  )

  const [viewport, setViewport] = useState({
    latitude: 27.776524,
    longitude: -82.678068,
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

       {listing.userId === getUserId() ? (
          <>
            <p>
              <button
                className="delete-button"
                onClick={function (event) {
                  event.preventDefault()

                  deleteRestaurant.mutate(listing.id)
                }}
              >
                Delete
              </button>
            </p>
            <p>
              <Link
                className="update-button"
                to={`/listings/${listing.id}/edit`}
              >
                <button>Update</button>
              </Link>
            </p>
          </>
        ) : null}

        <h1 className="listing-name">{listing.name}</h1>
        <div className="listing-graphics">
          <div className="listing-photo">
            {listing.photoURL ? (
              <img alt="Listing Photo" width={300} src={listing.photoURL} />
            ) : (
              <img
                src={mural}
                alt="stpete dot pet mural of pet friendly points of interest around St Petersburg Florida"
                width="350px"
                height="450px"
              />
            )}
          </div>

          <div className="listing-detail-map">
            <ReactMapGL
              {...viewport}
              style={{ position: 'absolute' }}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/stpetepet/ckubu5u0a2jdr17pv1snzoaqd"
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
                    <i className="recreation-icon fas fa-dog"></i>
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
                    <i className="residential-icon fas fa-home"></i>
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
            {listing.description ? (
              <li>
                <p>{listing.description}</p>
              </li>
            ) : null}

            {listing.address ? (
              <li>
                <p>
                  <strong>Address: </strong>
                  {listing.address}
                </p>
              </li>
            ) : null}

            {listing.phoneNumber ? (
              <li className="phone">
                <p>
                  <strong>Phone: </strong>
                  {listing.phoneNumber}
                </p>
              </li>
            ) : null}

            <li className="website">
              <button>
                <a href={listing.website}>Visit their website!</a>
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
