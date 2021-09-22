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

        <input type="submit" value="Update Listing" />

        <br />
        <br />

        <input type="submit" value="Delete Listing" />
      </div>
    </>
  )
}
