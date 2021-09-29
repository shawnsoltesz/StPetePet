import React from 'react'
import { Link } from 'react-router-dom'

export function UpdateUser() {
  return (
    <>
      <div className="admin-page">
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>{' '}
                <Link to="/">Home</Link>
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </p>
            </li>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-paw"></i>
                &nbsp;<Link to="/admin">StPete.Pet Admin</Link>
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </p>
            </li>

            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-user"></i>{' '}
                &nbsp;Update/Delete Account
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="listing-name">Update User</h1>
        </div>

        <h2>Update/Delete A User</h2>
        <div className="new-account">
          <p>Name: </p>
          <input type="text" name="username" />

          <p>E-mail Address:</p>
          <input type="text" name="email address" />

          <p>Password:</p>
          <input type="text" name="password" />

          <br />
          <br />

          <div className="update-listing-buttons">
            <button className="update-button">Update User</button>
            <button className="delete-button">Delete User</button>
          </div>
        </div>
      </div>
    </>
  )
}
