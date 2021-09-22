import React from 'react'
import garden from '../images/recreation/UTenn.jpg'

export function ListingDetail() {
  return (
    <>
      <h1 className="listing-name">UTenn Garden</h1>
      <div className="listing-photo">
        <img
          src={garden}
          alt="University of Tennessee dog mascot wearing an orange and white checkered cape"
        />
      </div>
      <div className="description">
        <p>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="contact-details">
        <div className="address">
          <button className="listing-button">
            <i className="fas fa-map"></i>
          </button>
          <p>
            <strong>Address:</strong>134 Central Avenue, St. Petersburg, FL
            33713
          </p>
        </div>
        <div className="phone">
          <button className="listing-button">
            <i className="fas fa-phone"></i>
          </button>
          <p>
            <strong>Phone:</strong>(727) 342-9877
          </p>
        </div>
        <div className="website">
          <button className="listing-button">
            <i className="fas fa-globe"></i>
          </button>
          <p>
            <strong>Website:</strong>http://www.google.com
          </p>
        </div>
      </div>
    </>
  )
}
