import React from 'react'

export function SearchListings() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <u>Home</u> /
            </p>
          </li>
          <li>
            <p>
              <u>Admin Welcome</u> /
            </p>
          </li>
          <li className="is-active">
            <p aria-current="page">
              {' '}
              &nbsp;<u>Search Listings</u>
            </p>
          </li>
        </ul>
      </div>
      <h1 className="listing-name">Search Listings</h1>
      <button className="logout">Logout</button>
      <div className="search-listing">
        <label>Search for a Listing </label>

        <form className="search">
          <input type="text" placeholder="Enter Name..." />
        </form>

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
