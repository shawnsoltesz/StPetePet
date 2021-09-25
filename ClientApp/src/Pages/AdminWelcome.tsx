import React from 'react'
import { Link } from 'react-router-dom'

export function AdminWelcome() {
  return (
    <>
      <button className="logout">Logout</button>

      <div className="admin-page">
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>{' '}
                <Link to="/">Home</Link> &nbsp;/&nbsp;
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-paw"></i>&nbsp;StPete.Pet
                Admin
              </p>
            </li>
          </ul>
        </div>
        <h1 className="listing-name">StPete.Pet Admin</h1>

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
