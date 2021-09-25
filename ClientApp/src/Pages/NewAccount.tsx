import React from 'react'
import { Link } from 'react-router-dom'

export function NewAccount() {
  return (
    <>
      <div className="admin-page">
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>{' '}
                <Link to="/">Home</Link>
                &nbsp;/&nbsp;
              </p>
            </li>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-paw"></i>
                &nbsp;<Link to="/admin">StPete.Pet Admin</Link>&nbsp;/&nbsp;
              </p>
            </li>

            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-user"></i> &nbsp;New
                Account
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="listing-name">New Account</h1>
        </div>
        <div className="new-account">
          <p>Name </p>
          <input type="text" name="username" />

          <p>E-mail Address</p>
          <input type="text" name="email address" />

          <p>Password</p>
          <input type="text" name="password" />

          <br />
          <br />

          <button className="new-account-button">Create New Account</button>
        </div>
      </div>
    </>
  )
}
