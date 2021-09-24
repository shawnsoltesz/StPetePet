import React from 'react'

export function NewListing() {
  return (
    <>
      <button className="logout">Logout</button>

      <div className="admin-page">
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
        <h1 className="listing-name">New Listing</h1>

        <div className="new-listing">
          <div className="dropdown">
            <p>Listing Type </p>

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
          </div>
          <p>Name</p>
          <input type="text" name="name" />

          <p>Description</p>

          <textarea id="description" name="description" />

          <p>Address</p>
          <input
            type="text"
            name="address"
            placeholder="123 Central Ave, St Petersburg, FL 33713"
          />

          <p>Website</p>

          <input
            type="text"
            name="website"
            placeholder="http://www.stpete.pet"
          />

          <p>Phone Number</p>

          <input type="text" name="phone-number" placeholder="727-555-1212" />
          <br />
          <br />
          <p>Click on the &quot;Browse&quot; button to upload an image:</p>
          <form action="/action_page.php">
            <input type="file" id="listing-image" name="filename" />
          </form>
          <br />
          <br />
          <button className="new-listing-button">Create New Listing</button>
        </div>
      </div>
    </>
  )
}
