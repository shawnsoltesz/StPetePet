import React from 'react'
import { useQuery } from 'react-query'

import StPete from '../images/map/map-stpete-fl.gif'
import { ListingType } from '../types'

export function Listings() {
  const { data: listings = [] } = useQuery<ListingType[]>(
    'listings',
    async function () {
      const response = await fetch('/api/listings')
      return response.json()
    }
  )
  console.log({ listings })
  return (
    <>
      <h1 className="listing-name">Search Listings</h1>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="search-dropdown">
        <p>Listing Type: &nbsp; &nbsp; </p>

        <select name="listing-specialty" id="listing-specialty">
          <option value="null">Select</option>
          <option value="bar-restaurant">Bar &amp; Restaurant </option>
          <option value="beach">Beach</option>
          <option value="boarding">Boarding</option>
          {/* <option value="event">Event</option> */}
          <option value="grooming">Grooming</option>
          <option value="lodging">Lodging</option>
          <option value="medical-care">Medical Care</option>
          <option value="park">Park</option>
          <option value="pet sitter">Pet Sitter</option>
          <option value="residential">Residential</option>
          <option value="specialty">Specialty</option>
          <option value="supplies">Supplies &amp; Care</option>
          {/* <option value="transportation">Transportation</option> */}
        </select>
      </div>
      <span className="map">
        <div className="map-image">
          <img src={StPete} alt="aerial map of St Petersburg, FL" />
        </div>
      </span>
      <div>
        <ul className="listing">
          {listings.map(function (listing) {
            return (
              <li key={listing.id}>
                <h2>{listing.name}</h2>
                <p>Type: {listing.listingType}</p>
                <p>{listing.address}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
