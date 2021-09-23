import React from 'react'
import StPete from '../images/map/map-stpete-fl.gif'

export function Home() {
  return (
    <>
      <h1 className="listing-name">Welcome!</h1>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="search-dropdown">
        <p>Listing Type: &nbsp; &nbsp; </p>

        <select name="listing-specialty" id="listing-specialty">
          <option value="null">Select</option>
          <option value="bar-restaurant">Bar &amp; Restaurant </option>
          <option value="beach">Beach</option>
          <option value="boarding">Boarding</option>
          {/* <option value="event">Event</option> */}
          <option value="grooming">Grooming</option>
          <option value="lodging">Lodging</option>
          <option value="medical-care">Medical Care</option>
          <option value="park">Park</option>
          <option value="pet-sitter">Pet Sitter</option>
          <option value="residential">Residential</option>
          <option value="specialty">Specialty</option>
          <option value="supplies">Supplies &amp; Care</option>
          {/* <option value="transportation">Transportation</option> */}
        </select>
      </div>
      <span className="map">
        <div className="map-image">
          <img src={StPete} alt="aerial map of St Petersburg, FL" />
        </div>
      </span>
      <div>
        <ul className="listing1">
          <li>
            <h2>Name</h2>
          </li>
          <li>
            <p>Address</p>
          </li>
        </ul>
      </div>

      <div>
        <ul className="listing2">
          <li>
            <h2>Name</h2>
          </li>
          <li>
            <p>Address</p>
          </li>
        </ul>
      </div>

      <div>
        <ul className="listing3">
          <li>
            <h2>Name</h2>
          </li>
          <li>
            <p>Address</p>
          </li>
        </ul>
      </div>
    </>
  )
}
