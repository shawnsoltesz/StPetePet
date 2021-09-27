import React from 'react'
import { Link } from 'react-router-dom'

export function UpdateListing() {
  return (
    <>
      <button className="logout">Logout</button>
      <div className="admin-page">
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
                <i className="breadcrumb-icon fas fa-list"></i>&nbsp;Update
                Listing
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="listing-name">Update Listing</h1>
        </div>
        <div className="update-listing">
          <div className="dropdown">
            <p>Listing Type </p>

            <select name="listing-type" id="listing-type">
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
          <div className="update-listing-buttons">
            <button className="update-button">Update Listing</button>
            <button className="delete-button">Delete Listing</button>
          </div>
        </div>
      </div>
    </>
  )
}
