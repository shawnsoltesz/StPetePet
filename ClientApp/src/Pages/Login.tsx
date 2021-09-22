import React from 'react'

export function Login() {
  return (
    <>
      <h1 className="listing-name">Login</h1>
      <div className="login">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" />

        <label>Password:</label>
        <input type="text" name="password" />

        <br />
        <br />

        <input type="submit" value="Submit" />
      </div>
    </>
  )
}
