import React from 'react'

export function NewListing() {
  return (
    <>
      <div className="admin-logout">
        <div className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <p>
                <i className="home fas fa-home"></i> <u>Home</u> /
              </p>
            </li>
            <li>
              <p>
                &nbsp;<u>Admin Welcome</u> /
              </p>
            </li>
            <li className="is-active">
              <p aria-current="page">
                &nbsp;<u>New Listing</u>
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

        <form className="new-listing" action="#">
          <div className="dropdown">
            <p className="form-input">
              <strong>Listing Type &nbsp;</strong>

              <select name="listing-specialty" id="listing-specialty">
                <option value="null">Select</option>
                <option value="bar-restaurant">Bar &amp; Restaurant </option>
                <option value="beach">Beach</option>
                <option value="boarding">Boarding</option>
                <option value="grooming">Grooming</option>
                <option value="lodging">Lodging</option>
                <option value="medical-care">Medical Care</option>
                <option value="park">Park</option>
                <option value="pet-sitter">Pet Sitter</option>
                <option value="residential">Residential</option>
                <option value="specialty">Specialty</option>
                <option value="supplies">Supplies &amp; Care</option>
              </select>
            </p>
          </div>
          <p className="form-input">
            <strong>Name&nbsp;</strong>
          </p>
          <input type="text" name="name" />

          <p className="form-input">
            <strong>Description</strong>{' '}
          </p>
          <textarea id="description" name="description" />

          <p>Address&nbsp;</p>
          <input
            type="text"
            name="address"
            placeholder="123 Central Ave, St Petersburg, FL 33713"
          />

          <p>Website&nbsp;</p>
          <input
            type="text"
            name="website"
            placeholder="http://www.stpete.pet"
          />

          <p>Phone Number&nbsp;</p>
          <input type="text" name="phone-number" placeholder="727-555-1212" />

          <p>Picture&nbsp;</p>
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
