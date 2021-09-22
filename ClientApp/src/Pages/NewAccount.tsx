import React from 'react'

export function NewAccount() {
  return (
    <>
      <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              New Account
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="listing-name">New Account</h1>
      <div className="new-account">
        <label htmlFor="name">Name: </label>
        <input type="text" name="username" />

        <label>E-mail Address:</label>
        <input type="text" name="email address" />

        <label>Password:</label>
        <input type="text" name="password" />

        <br />
        <br />
        <p>Already have an account, login</p>
        <br />
        <br />

        <button className="button is-warning is-small">
          Create New Account
        </button>
      </div>
    </>
  )
}
