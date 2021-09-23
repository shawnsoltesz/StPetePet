import React from 'react'

export function Login() {
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
              &nbsp;<u>Login</u>
            </p>
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
        <div className="login-redirect1">
          <a href="#">Forgot Password</a>
        </div>
        <div className="login-redirect2">
          <a href="#">Already have an account, login</a>
        </div>
        <br />
        <br />

        <button>Login</button>
      </div>
    </>
  )
}
