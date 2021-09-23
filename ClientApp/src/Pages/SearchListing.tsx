import React from 'react'

export function SearchListing() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>Breadcrumb: Home /</p>
          </li>
          <li className="is-active">
            <p aria-current="page"> &nbsp;Search Listings</p>
          </li>
        </ul>
      </div>
      <h1 className="listing-name">Search Listings</h1>
      <div className="search-listing">
        <label>Search for a Listing </label>

        <div className="search">
          <input type="text" placeholder="Enter Name..." />
        </div>

        <br />
        <br />

        <button>Update Listing</button>

        <br />
        <br />

        <button>Delete Listing</button>
      </div>
    </>
  )
}
