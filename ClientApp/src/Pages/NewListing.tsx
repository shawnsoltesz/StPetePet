import React from 'react'

export function NewListing() {
  return (
    <>
      <h1 className="listing-name">New Listing</h1>
      <div className="new-listing">
        <label>Listing type:</label>
        <select name="listing-type" id="listing-type">
          <option value="business">Business</option>
          <option value="recreation">Recreation</option>
        </select>

        <label>Listing specialty:</label>
        <select name="listing-specialty" id="listing-specialty">
          <option value="bar">Bar</option>
          <option value="beach">Beach</option>
          <option value="boarding">Boarding</option>
          <option value="event">Event</option>
          <option value="grooming">Grooming</option>
          <option value="lodging">Lodging</option>
          <option value="medical-care">Medical Care</option>
          <option value="park">Park</option>
          <option value="pet-sitter">Pet Sitter</option>
          <option value="restaurant">Restaurant</option>
          <option value="specialty">Specialty</option>
          <option value="supplies">Supplies &amp; Care</option>
          <option value="transportation">Transportation</option>
        </select>

        <label>Suitable For:</label>
        <select name="pet-suitability" id="pet-suitability">
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
        <input type="text" name="description" />

        <label>Address:</label>
        <input type="text" name="address" />

        <label>Website:</label>
        <input type="text" name="website" />

        <label>Phone Number:</label>
        <input type="text" name="phone-number" />

        <br />
        <br />

        <input type="submit" value="Submit" />
      </div>
    </>
  )
}
