import React from 'react'

export function NewAccount() {
  return (
    <>
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

        <input type="submit" value="Create New Account" />
      </div>
    </>
  )
}
