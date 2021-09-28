import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { recordAuthentication } from '../auth'
import { APIError, LoginSuccess, LoginUserType } from '../types'

export function Login() {
  async function loginUser(user: LoginUserType): Promise<LoginSuccess> {
    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    if (response.ok) {
      return response.json()
    } else {
      return await response.json()
    }
  }

  const [errorMessage, setErrorMessage] = useState('')

  const [user, setUser] = useState<LoginUserType>({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }

  const loginUserMutation = useMutation(loginUser, {
    onSuccess: function (apiResponse) {
      // TODO: record the authentication information we receive

      recordAuthentication(apiResponse)
      window.location.assign('/admin')
    },
    onError: function (error: APIError) {
      setErrorMessage(Object.values(error.errors).join(' '))
    },
  })

  return (
    <>
      <div className="admin-page">
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>{' '}
                <Link to="/">Home</Link>
                &nbsp;/&nbsp;
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-sign-in-alt"></i>
                &nbsp;Login
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="listing-name">Login</h1>
        </div>
        <form
          onSubmit={function (event) {
            event.preventDefault

            loginUserMutation.mutate(user)
          }}
        >
          <div className="login">
            <p>Username </p>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleStringFieldChange}
            />

            <p>Password</p>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleStringFieldChange}
            />

            {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
