import React from 'react'

export function UpdateListing() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>Breadcrumb: Home /</p>
          </li>
          <li className="is-active">
            <p aria-current="page"> &nbsp;Update Listing</p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="listing-name">Update Listing</h1>
      </div>
      <div className="update-listing">
        <div className="dropdown">
          <p>Type:</p>

          <select name="listing-type" id="listing-type">
            <option value="null">Select</option>
            <option value="business">Business</option>
            <option value="recreation">Recreation</option>
          </select>

          <p>Specialty: </p>

          <select name="listing-specialty" id="listing-specialty">
            <option value="null">Select</option>
            <option value="bar-restaurant">Bar &amp; Restaurant </option>
            <option value="beach">Beach</option>
            <option value="boarding">Boarding</option>
            <option value="event">Event</option>
            <option value="grooming">Grooming</option>
            <option value="lodging">Lodging</option>
            <option value="medical-care">Medical Care</option>
            <option value="park">Park</option>
            <option value="pet-sitter">Pet Sitter</option>
            <option value="specialty">Specialty</option>
            <option value="supplies">Supplies &amp; Care</option>
            <option value="transportation">Transportation</option>
          </select>

          <p>Suitable For:</p>
          <select name="pet-suitability" id="pet-suitability">
            <option value="null">Select</option>
            <option value="all">All</option>
            <option value="bird">Bird</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="rabbit">Rabbit</option>
            <option value="specialty">Specialty</option>
          </select>
        </div>
        <p>Name:</p>
        <input type="text" name="name" />

        <p>Description:</p>
        {/* <input type="textarea" name="description" /> */}

        <textarea id="description" name="description" />

        <p>Address:</p>
        <input
          type="text"
          name="address"
          placeholder="Format: 123 Central Ave, St Petersburg, FL 33713"
        />

        <p>Website:</p>

        <input
          type="text"
          name="website"
          placeholder="Format: http://www.stpete.pet"
        />

        <p>Phone Number:</p>

        <input
          type="text"
          name="phone-number"
          placeholder="Format: 727-555-1212"
        />

        <br />
        <br />
        <p>Click on the &quot;Browse&quot; button to upload an image:</p>
        <form action="/action_page.php">
          <input type="file" id="listing-image" name="filename" />
        </form>
        <br />
        <br />
        <button>Update Listing</button>
      </div>
    </>
  )
}
