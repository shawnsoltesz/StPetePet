import React from 'react'

export function SearchListing() {
  return (
    <>
      <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Search Listings
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="listing-name">Search Listing</h1>
      <div className="search-listing">
        <label>Search for a Listing </label>

        <div className="search">
          <input type="text" placeholder="Enter Name..." />
        </div>

        <br />
        <br />

        <button className="button is-warning is-small">Update Listing</button>

        <br />
        <br />

        <button className="button is-warning is-small">Delete Listing</button>
      </div>
    </>
  )
}
