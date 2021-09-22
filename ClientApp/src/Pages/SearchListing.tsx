import React from 'react'

export function SearchListing() {
  return (
    <>
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
