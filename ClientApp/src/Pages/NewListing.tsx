import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { ListingType } from '../types'

async function submitNewListing(listingToCreate: ListingType) {
  const response = await fetch('/api/Listings', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(listingToCreate),
  })

  return response.json()
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

  const createNewListing = useMutation(submitNewListing)

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
      <div className="admin-logout">
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
        <div className="logout">
          <button>Logout</button>
        </div>
      </div>

      <div className="admin-page">
        <h1 className="listing-name">New Listing</h1>
        <div className="input-form-instructions">
          <p>All fields are required.</p>
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
              <option value="null">Select</option>
              <option value="Bar &amp; Restaurant">
                Bar &amp; Restaurant{' '}
              </option>
              <option value="Beach">Beach</option>
              <option value="Boarding">Boarding</option>
              <option value="Grooming">Grooming</option>
              <option value="Lodging">Lodging</option>
              <option value="Medical&nbsp;Care">Medical Care</option>
              <option value="Park">Park</option>
              <option value="Pet&nbsp;Sitter">Pet Sitter</option>
              <option value="Residential">Residential</option>
              <option value="Specialty">Specialty</option>
              <option value="Supplies">Supplies &amp; Care</option>
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
            placeholder="Include html tagging for Description to appear correctly."
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
            <label htmlFor="phoneNumber">Telephone</label>
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
          <div className="picture-upload">
            <p>Click on the &quot;Browse&quot; button to upload an image:</p>
            <form action="/action_page.php">
              <input type="file" id="listing-image" name="filename" />
            </form>
          </div>
          <button className="new-listing-button">Create New Listing</button>
        </form>
      </div>
    </>
  )
}
