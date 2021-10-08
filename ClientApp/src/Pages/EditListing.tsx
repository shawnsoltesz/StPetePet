import React, { useState, valueOf } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link, useHistory, useParams } from 'react-router-dom'
import { APIError, ListingType, NewListingType, UploadResponse } from '../types'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

export async function submitEditedListing(listingToUpdate: NewListingType) {
  const response = await fetch(`/api/Listing/${listingToUpdate.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: authHeader(),
    },
    body: JSON.stringify(listingToUpdate),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export async function loadOneListing(id: string) {
  const response = await fetch(`/api/listings/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
export function EditListing() {
  const history = useHistory()

  const { id } = useParams<{ id: string }>()

  useQuery<ListingType>(['one-listing', id], () => loadOneListing(id), {
    onSuccess: function (listingBeingLoaded) {
      setUpdatingListing(listingBeingLoaded)
    },
  })

  const [updatingListing, setUpdatingListing] = useState<ListingType>({
    id: undefined,
    isActive: true,
    listingType: '',
    name: '',
    description: '',
    address: '',
    website: '',
    phoneNumber: '',
    createdDate: valueOf(),
    updatedDate: new Date(),
    photoURL: '',
    userId: 0,
    latitude: 0,
    longitude: 0,
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const updateTheListing = useMutation(submitEditedListing, {
    onSuccess: function () {
      history.push('/')
    },
    onError: function (apiError: APIError) {
      setErrorMessage(Object.values(apiError.errors).join(' '))
    },
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedListing = { ...updatingListing, [fieldName]: value }

    setUpdatingListing(updatedListing)
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
  function onDropFile(acceptedFiles: File[]) {
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

      setUpdatingListing({ ...updatingListing, photoURL: url })
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
    dropZoneMessage = 'Drop the files here ...'
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
            <li className="is-active">
              <p aria-current="page">
                <i className="breadcrumb-icon fas fa-list"></i>
                <Link to="/listings/:id/edit">&nbsp;Listing Detail</Link>
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <i className="breadcrumb-icon fas fa-edit"></i>&nbsp;Edit
                Listing
              </p>
            </li>
          </ul>
        </div>

        <h1 className="listing-name">Edit Listing</h1>
        <div className="input-form-instructions">
          <p>
            <strong className="asterisks">*</strong>
            All fields are required
          </p>
        </div>

        <form
          className="update-listing"
          onSubmit={(event) => {
            event.preventDefault()
            updateTheListing.mutate(updatingListing)
          }}
        >
          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
          <div className="dropdown">
            <p className="form-input">
              <label htmlFor="listing-type">Type&nbsp;</label>
            </p>
            <select
              id="listing-type"
              name="listingType"
              value={updatingListing.listingType}
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
            value={updatingListing.name}
            onChange={handleStringFieldChange}
          />

          <p className="form-input">
            <label htmlFor="description">Description</label>
          </p>

          <textarea
            name="description"
            // placeholder="Include html tagging for Description to appear correctly."
            value={updatingListing.description}
            onChange={handleStringFieldChange}
          />

          <p className="form-input">
            <label htmlFor="address">Address</label>
          </p>
          <input
            type="text"
            name="address"
            placeholder="123 Central Ave, St Petersburg, FL 33713"
            value={updatingListing.address}
            onChange={handleStringFieldChange}
          />

          <p className="form-input">
            <label htmlFor="website">Website</label>
          </p>
          <input
            type="text"
            name="website"
            placeholder="http://www.stpete.pet"
            value={updatingListing.website}
            onChange={handleStringFieldChange}
          />

          <p className="form-input">
            <label htmlFor="phoneNumber">Telephone Number</label>
          </p>
          <input
            type="text"
            name="phoneNumber"
            placeholder="(727) 555-1212"
            value={updatingListing.phoneNumber}
            onChange={handleStringFieldChange}
          />
          <p className="form-input">
            <label htmlFor="picture">Picture</label>
          </p>
          {updatingListing.photoURL ? (
            <p>
              <img
                alt="Restaurant Photo"
                width={200}
                src={updatingListing.photoURL}
              />
            </p>
          ) : null}
          {updatingListing.photoURL ? (
            <p>
              <button
                onClick={function (event) {
                  event.preventDefault()

                  setUpdatingListing({ ...updatingListing, photoURL: '' })
                }}
              >
                Remove Photo
              </button>
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
            Submit Edits
          </button>
        </form>
      </main>
    </>
  )
}
