import React from 'react'

export function UserAdmin() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <u>Home</u> /
            </p>
          </li>
          <li>
            <p>
              <u>Admin Welcome</u> /
            </p>
          </li>
          <li className="is-active">
            <p aria-current="page">
              {' '}
              &nbsp;<u>Update/Delete Account</u>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="listing-name">User Admin</h1>
        <button className="logout">Logout</button>
      </div>
      <h2>Create A New Account</h2>
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

      <h2>Update/Delete An Account</h2>
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
    </>
  )
}