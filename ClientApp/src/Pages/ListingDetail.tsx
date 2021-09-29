import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { ListingType } from '../types'

import fortdesoto from '../images/listings/FortDesoto.jpg'
import StPete from '../images/map/map-stpete-fl.gif'
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
}

export function ListingDetail() {
  const { id } = useParams<{ id: string }>()

  const { data: listing = NullListing } = useQuery<ListingType>(
    ['one-listing', id],
    () => loadOneListing(id)
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
        <div className="listing-photo">
          <img src={fortdesoto} alt="cocker spaniel at the beach" />
        </div>

        <span className="map">
          <div className="map-image">
            <img src={StPete} alt="aerial map of St Petersburg, FL" />
          </div>
        </span>

        <div className="description">
          <p>{listing.description}</p>
        </div>
        <div className="contact-details">
          <div className="contact-buttons">
            <ul>
              <li>
                <button className="map">
                  <i className="fas fa-map"></i>
                </button>
              </li>
              <li>
                <button className="phone">
                  <i className="fas fa-phone">
                    <a href={`tel:+1${listing.phoneNumber}`} />
                  </i>
                </button>
              </li>
              <li>
                <button className="web-search">
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
                <a href={listing.website}>{listing.name}</a>
              </p>
            </li>
          </ul>
          <div className="rating">
            <p>
              <i className="useful fas fa-paw"></i> &nbsp;Useful &#40;0&#41;
            </p>
            <p>
              <i className="not-useful fas fa-paw"></i>&nbsp; Not Useful
              &#40;0&#41;
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
