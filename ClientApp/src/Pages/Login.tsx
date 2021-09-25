import React from 'react'
import { Link } from 'react-router-dom'

export function Login() {
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
            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-sign-in-alt"></i>
                &nbsp;Login
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="listing-name">Login</h1>
        </div>
        <div className="login">
          <p>Username </p>
          <input type="text" name="username" />

          <p>Password</p>
          <input type="text" name="password" />

          <button className="login-button">Login</button>
        </div>
      </div>
    </>
  )
}
