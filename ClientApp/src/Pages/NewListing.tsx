import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useHistory } from 'react-router-dom'
import { APIError, ListingType } from '../types'

async function submitNewListing(listingToCreate: ListingType) {
  const response = await fetch('/api/Listings', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(listingToCreate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function NewListing() {
  const [newListing, setNewListing] = useState<ListingType>({
    id: undefined,
    isActive: true,
    listingType: '',
    name: '',
    description: '',
    address: '',
    website: '',
    phoneNumber: '',
    createdDate: new Date(),
    updatedDate: new Date(),
  })

  const [errorMessage, setErrorMessage] = useState('')

  const createNewListing = useMutation(submitNewListing, {
    onSuccess: function () {
      history.push('/admin')
    },
    onError: function (apiError: APIError) {
      setErrorMessage(Object.values(apiError.errors).join(' '))
    },
  })

  const history = useHistory()

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    createNewListing.mutate(newListing)
  }

  function handleStringFieldChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedListing = { ...newListing, [fieldName]: value }

    setNewListing(updatedListing)
  }

  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <i className="breadcrumb-icon fas fa-home"></i>{' '}
              <Link to="/">Home</Link>&nbsp;/&nbsp;
            </p>
          </li>
          <li>
            <p>
              <i className="breadcrumb-icon fas fa-paw"></i>&nbsp;
              <Link to="/admin">StPete.Pet Admin</Link>&nbsp;/&nbsp;
            </p>
          </li>
          <li className="is-active">
            <p aria-current="page">
              <i className="breadcrumb-icon fas fa-list"></i>&nbsp;New Listing
            </p>
          </li>
        </ul>
      </div>

      <h1 className="listing-name">New Listing</h1>
      <div className="input-form-instructions">
        <p>
          <strong className="asterisks">*</strong>
          All fields are required
        </p>
      </div>

      <form className="new-listing" onSubmit={handleFormSubmit}>
        <div className="dropdown">
          <p className="form-input">
            <label htmlFor="listing-type">Type</label>
          </p>
          <select
            id="listing-type"
            name="listingType"
            value={newListing.listingType}
            onChange={handleStringFieldChange}
          >
            <option value="Null">Select</option>
            <option value="Boarding&nbsp;&amp;&nbsp;Pet&nbsp;Sitters">
              Boarding&nbsp;&amp;&nbsp;Pet&nbsp;Sitters
            </option>
            <option value="Dining&nbsp;&amp;&nbsp;Drinks">
              Dining&nbsp;&amp;&nbsp;Drinks
            </option>
            <option value="Dog&nbsp;Beaches&nbsp;&amp;&nbsp;Parks">
              Dog&nbsp;Beaches&nbsp;&amp;&nbsp;Parks
            </option>
            <option value="For Rent">For&nbsp;Rent</option>
            <option value="Food&nbsp;&amp;&nbsp;Supplies">
              Food&nbsp;&amp;&nbsp;Supplies
            </option>
            <option value="Grooming&nbsp;&amp;&nbsp;Specialty&nbsp;Services">
              Grooming&nbsp;&amp;&nbsp;Specialty&nbsp;Services
            </option>
            <option value="Pet&nbsp;Adoptions">Pet&nbsp;Adoptions</option>
            <option value="Shopping">Shopping</option>
            <option value="Travel">Travel</option>
            <option value="Veterinarians">Veterinarians</option>
          </select>
        </div>

        <p className="form-input">
          <label htmlFor="name">Name</label>
        </p>

        <input
          type="text"
          name="name"
          value={newListing.name}
          onChange={handleStringFieldChange}
        />

        <p className="form-input">
          <label htmlFor="description">Description</label>
        </p>

        <textarea
          name="description"
          // placeholder="Include html tagging for Description to appear correctly."
          value={newListing.description}
          onChange={handleStringFieldChange}
        />

        <p className="form-input">
          <label htmlFor="address">Address</label>
        </p>
        <input
          type="text"
          name="address"
          placeholder="123 Central Ave, St Petersburg, FL 33713"
          value={newListing.address}
          onChange={handleStringFieldChange}
        />

        <p className="form-input">
          <label htmlFor="website">Website</label>
        </p>
        <input
          type="text"
          name="website"
          placeholder="http://www.stpete.pet"
          value={newListing.website}
          onChange={handleStringFieldChange}
        />

        <p className="form-input">
          <label htmlFor="phoneNumber">Telephone Number</label>
        </p>
        <input
          type="text"
          name="phoneNumber"
          placeholder="727-555-1212"
          value={newListing.phoneNumber}
          onChange={handleStringFieldChange}
        />

        <p className="form-input">
          <label htmlFor="picture">Picture</label>
        </p>

        <p className="form-input">
          Click on the &quot;Browse&quot; button to upload an image: &nbsp;
          <input className="file-upload" type="file" name="picture" />
        </p>

        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

        <button type="submit" className="new-listing-button">
          Create New Listing
        </button>
      </form>
    </>
  )
}
