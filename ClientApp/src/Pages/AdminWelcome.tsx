import React from 'react'

export function AdminWelcome() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <u>Home</u> /
            </p>
          </li>
          <li className="is-active">
            <p aria-current="page">
              {' '}
              &nbsp;<u>StPete.Pet Admin</u>
            </p>
          </li>
        </ul>
      </div>
      <h1 className="listing-name">StPete.Pet Admin</h1>
      <div className="search-listing">
        <label>Search for a Listing </label>
        <button className="logout">Logout</button>
        <div className="search">
          <input type="text" placeholder="Enter Name..." />
        </div>

        <br />
        <br />
        <div className="admin-menu">
          <h2>Listings</h2>

          <button className="listing-menu">Create Listing</button>

          <br />
          <br />

          <button className="listing-menu">Update / Delete Listing</button>

          <br />
          <br />

          <button className="listing-menu">Delete Listing</button>
          <h2>Users</h2>

          <br />
          <br />

          <button className="user-menu">Create / Update User</button>

          <br />
          <br />
        </div>
      </div>
    </>
  )
}
