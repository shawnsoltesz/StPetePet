import React from 'react'

export function Login() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>Breadcrumb: Home /</p>
          </li>
          <li className="is-active">
            <p aria-current="page"> &nbsp;Login</p>
          </li>
        </ul>
      </div>
      <h1 className="listing-name">Login</h1>
      <div className="login">
        <label>Username: </label>
        <input type="text" name="username" />

        <label>Password:</label>
        <input type="text" name="password" />

        <br />
        <br />
        <p>Forgot Password</p>
        <p>Already have an account, login</p>

        <br />
        <br />

        <button className="button is-warning is-small">Login</button>
      </div>
    </>
  )
}
