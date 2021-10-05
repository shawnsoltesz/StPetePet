import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useHistory } from 'react-router-dom'
import { APIError, ListingType, UploadResponse } from '../types'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

async function submitNewListing(listingToCreate: ListingType) {
  const response = await fetch('/api/Listings', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: authHeader(),
    },
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
    latitude: 0,
    longitude: 0,
    photoURL: '',
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const createNewListing = useMutation(submitNewListing, {
    onSuccess: function () {
      history.push('/')
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

  async function uploadFile(fileToUpload: File) {
    // Create a formData object so we can send this
    // to the API that is expecting some form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    // Use fetch to send an authorization header and
    // a body containing the form data with the file
    const response = await fetch('/api/Uploads', {
      method: 'POST',
      headers: {
        Authorization: authHeader(),
      },
      body: formData,
    })

    if (response.ok) {
      return response.json()
    } else {
      throw 'Unable to upload image!'
    }
  }

  async function onDropFile(acceptedFiles: File[]) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    setIsUploading(true)

    uploadFileMutation.mutate(fileToUpload)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  const uploadFileMutation = useMutation(uploadFile, {
    onSuccess: function (apiResponse: UploadResponse) {
      const url = apiResponse.url

      setNewListing({ ...newListing, photoURL: url })
    },

    onError: function (error: string) {
      setErrorMessage(error)
    },

    onSettled: function () {
      setIsUploading(false)
    },
  })
  let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }

  if (isDragActive) {
    dropZoneMessage =
      'Click here, or drag a picture for the listing here to upload!'
  }

  return (
    <>
      <main>
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>
                <Link to="/">Home</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
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
              <label htmlFor="listing-type">Type&nbsp;</label>
            </p>
            <select
              id="listing-type"
              name="listingType"
              value={newListing.listingType}
              onChange={handleStringFieldChange}
            >
              <option value="null">Select</option>
              <option value="adoptions">Adoptions</option>
              <option value="dining">Dining Out</option>
              <option value="grooming">Grooming</option>
              <option value="medical">Medical</option>
              <option value="pet-care">Pet Care</option>
              <option value="recreation">Recreation</option>
              <option value="residential">Residential</option>
              <option value="shopping">Shopping</option>
              <option value="vacation">Vacation</option>
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
            placeholder="(727) 555-1212"
            value={newListing.phoneNumber}
            onChange={handleStringFieldChange}
          />
          <p className="form-input">
            <label htmlFor="picture">Picture</label>
          </p>
          {newListing.photoURL ? (
            <p>
              <img
                alt="Restaurant Photo"
                width={200}
                src={newListing.photoURL}
              />
            </p>
          ) : null}

          <div className="file-drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {dropZoneMessage}
            </div>
          </div>

          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

          <button type="submit" className="new-listing-button">
            Create New Listing
          </button>
        </form>
      </main>
    </>
  )
}
