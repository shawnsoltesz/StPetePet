import React from 'react'

export function Login() {
  return (
    <>
      <div className="admin-page">
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="home fas fa-home"></i> <u>Home</u>&nbsp;/
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
