import React from 'react'

export function NewAccount() {
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
                {' '}
                &nbsp;<u>New Account</u>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="listing-name">New Account</h1>
        </div>
        <div className="new-account">
          <p>Name: </p>
          <input type="text" name="username" />

          <p>E-mail Address:</p>
          <input type="text" name="email address" />

          <p>Password:</p>
          <input type="text" name="password" />

          <br />
          <br />

          <button>Create New Account</button>
        </div>
      </div>
    </>
  )
}
