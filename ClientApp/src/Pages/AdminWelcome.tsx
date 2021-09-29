import React from 'react'
import { Link } from 'react-router-dom'

export function AdminWelcome() {
  return (
    <>
      <main>
        <nav>
          <div className="admin-nav">
            <div className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <p>
                    <i className="breadcrumb-icon fas fa-home"></i>
                    <Link to="/">Home</Link> &nbsp;/&nbsp;
                  </p>
                </li>
                <li className="is-active">
                  <p aria-current="page">
                    <i className="breadcrumb-icon fas fa-paw"></i>
                    &nbsp;StPete.Pet Admin
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="admin-page">
          <h1 className="listing-name">StPete.Pet Admin</h1>

          <div className="search-listing">
            <div className="admin-menu">
              <h2>Listings</h2>

              <Link className="listing-menu" to="/admin/addlisting">
                <button>Add Listing</button>
              </Link>

              <br />
              <br />
              <Link className="listing-menu" to="/admin/updatelisting">
                <button>Update / Delete Listing</button>
              </Link>

              <h2>Users</h2>

              <br />
              <br />
              <Link className="listing-menu" to="/admin/adduser">
                <button>Add Users</button>
              </Link>
              <br />
              <br />
              <Link className="listing-menu" to="/admin/updateuser">
                <button>Update / Delete Users</button>
              </Link>

              <br />
              <br />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
