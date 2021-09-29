import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useHistory } from 'react-router-dom'
import { APIError, NewUserType } from '../types'

export function NewUser() {
  async function submitNewUser(newUser: NewUserType) {
    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  const [errorMessage, setErrorMessage] = useState('')

  const [newUser, setNewUser] = useState<NewUserType>({
    fullName: '',
    email: '',
    password: '',
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  const history = useHistory()

  const createUserMutation = useMutation(
    (newUser: NewUserType) => submitNewUser(newUser),
    {
      onSuccess: function () {
        history.push('/admin')
      },
      onError: function (error: APIError) {
        setErrorMessage(Object.values(error.errors).join(' '))
      },
    }
  )

  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <i className="breadcrumb-icon fas fa-home"></i>
              <Link to="/">Home</Link>
              &nbsp;/&nbsp;
            </p>
          </li>
          <li>
            <p>
              <i className="breadcrumb-icon fas fa-paw"></i>
              &nbsp;<Link to="/admin">StPete.Pet Admin</Link>&nbsp;/&nbsp;
            </p>
          </li>

          <li className="is-active">
            <p aria-current="page">
              <i className="breadcrumb-icon fas fa-user"></i> &nbsp;New Account
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="listing-name">New User Account</h1>
      </div>

      <form
        className="new-user-form"
        onSubmit={(event) => {
          event.preventDefault()

          createUserMutation.mutate(newUser)
        }}
      >
        <div className="admin-page">
          <div className="new-account">
            <p>Full Name</p>
            <p>
              <input
                type="text"
                name="fullName"
                value={newUser.fullName}
                onChange={handleStringFieldChange}
              />
            </p>

            <p>E-mail Address</p>
            <p>
              <input
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleStringFieldChange}
              />
            </p>

            <p>Password</p>
            <p>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleStringFieldChange}
              />
            </p>

            <br />
            <br />
            {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
            <button type="submit" className="new-account-button">
              Create New Account
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
