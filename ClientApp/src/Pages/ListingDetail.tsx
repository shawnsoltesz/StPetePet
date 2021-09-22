import React from 'react'
import garden from '../images/recreation/UTenn.jpg'

export function ListingDetail() {
  return (
    <>
      <h1>Listing Detail</h1>
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
      <div className="name">
        <h2>Name</h2>
      </div>
      <div className="address">
        <p>134 Central Avenue, St. Petersburg, FL 33713</p>
      </div>
      <div className="phone">
        <p>(727) 342-9877</p>
      </div>
      <div className="website">
        <p>http://www.google.com</p>
      </div>
      <div className="contact-buttons">
        <div className="map-listing-button">
          <button>
            <i className="paw fas fa-paw"></i>
          </button>
        </div>
        <div className="phone-listing-button">
          <button>
            <i className="paw fas fa-paw"></i>
          </button>
        </div>
        <div className="web-listing-button">
          <button>
            <i className="paw fas fa-paw"></i>
          </button>
        </div>
      </div>
    </>
  )
}
