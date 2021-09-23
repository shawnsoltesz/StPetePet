import React from 'react'

export function NewListing() {
  return (
    <>
      <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              New Listing
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="listing-name">New Listing</h1>
      <div className="new-listing">
        <label>Type:</label>

        <select name="listing-type" id="listing-type">
          <option value="null">Select from the dropdown </option>
          <option value="business">Business</option>
          <option value="recreation">Recreation</option>
        </select>

        <label>Specialty: </label>

        <select name="listing-specialty" id="listing-specialty">
          <option value="null">Select from the dropdown </option>
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

        <label>Suitable For:</label>
        <select name="pet-suitability" id="pet-suitability">
          <option value="null">Select from the dropdown </option>
          <option value="all">All</option>
          <option value="bird">Bird</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="rabbit">Rabbit</option>
          <option value="specialty">Specialty</option>
        </select>

        <label>Name:</label>
        <input type="text" name="name" />

        <label>Description:</label>
        <input type="textarea" name="description" />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Format: 123 Central Ave, St Petersburg, FL 33713"
        />

        <label>Website:</label>

        <input
          type="text"
          name="website"
          placeholder="Format: http://www.stpete.pet"
        />

        <label>Phone Number:</label>

        <input
          type="text"
          name="phone-number"
          placeholder="Format: 727-555-1212"
        />

        <br />
        <br />

        <button className="create-listing">Create New Listing</button>
      </div>
    </>
  )
}
