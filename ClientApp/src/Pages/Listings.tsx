import React, { useState } from 'react'
import { useQuery } from 'react-query'

import StPete from '../images/map/map-stpete-fl.gif'
import { ListingType } from '../types'
import { SingleListingFromList } from '../components/Pages/SingleListingFromList'
import { Link } from 'react-router-dom'

export function Listings() {
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
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <i className="breadcrumb-icon fas fa-home"></i>{' '}
              <u>
                <Link to="/">Home</Link>
              </u>
              &nbsp;/&nbsp;
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
      <h1 className="listing-name">Search Listings</h1>
      <div className="search-options">
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
        <div className="search-dropdown">
          <h2>Listing Type: &nbsp; </h2>

          <form action={filterText}>
            <select name="listing-specialty" id="listing-specialty">
              <option value="Null">Select</option>
              <option value="Bar Restaurant">Bar &amp; Restaurant </option>
              <option value="Beach">Beach</option>
              <option value="Boarding">Boarding</option>
              <option value="Groomer">Grooming</option>
              <option value="Lodging">Lodging</option>
              <option value="Medical Care">Medical Care</option>
              <option value="Park">Park</option>
              <option value="Pet Sitter">Pet Sitter</option>
              <option value="Residential">Residential</option>
              <option value="Specialty">Specialty</option>
              <option value="Supplies">Supplies &amp; Care</option>
            </select>
          </form>
        </div>
      </div>
      <span className="map">
        <div className="map-image">
          <img src={StPete} alt="aerial map of St Petersburg, FL" />
        </div>
      </span>
      <div>
        <ul className="listing">
          {listings.map(function (listing) {
            return <SingleListingFromList key={listing.id} listing={listing} />
          })}
        </ul>
      </div>
    </>
  )
}
