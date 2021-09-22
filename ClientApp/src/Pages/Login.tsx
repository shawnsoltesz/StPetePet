import React from 'react'

export function Login() {
  return (
    <>
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
