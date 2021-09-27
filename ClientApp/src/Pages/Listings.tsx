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
