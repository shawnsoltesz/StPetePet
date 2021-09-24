import React from 'react'

export function AdminWelcome() {
  return (
    <>
      <div className="admin-page">
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <u>Home</u> /
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                &nbsp;<u>StPete.Pet Admin</u>
              </p>
            </li>
          </ul>
        </div>
        <h1 className="listing-name">StPete.Pet Admin</h1>
        <button className="logout">Logout</button>
        <div className="search-listing">
          <div className="admin-menu">
            <h2>Listings</h2>

            <button className="listing-menu">Create Listing</button>

            <br />
            <br />

            <button className="listing-menu">Update / Delete Listing</button>
            <h2>Users</h2>

            <br />
            <br />

            <button className="user-menu">Create / Update User</button>

            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
