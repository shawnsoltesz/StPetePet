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
      <div>
        <h1 className="listing-name">Login</h1>
      </div>
      <div className="login">
        <p>Username: </p>
        <input type="text" name="username" />

        <p>Password:</p>
        <input type="text" name="password" />

        <br />
        <br />
        <p>Forgot Password</p>
        <p>Already have an account, login</p>

        <br />
        <br />

        <button>Login</button>
      </div>
    </>
  )
}
