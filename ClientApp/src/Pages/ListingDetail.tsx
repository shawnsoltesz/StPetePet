import React from 'react'
import fortdesoto from '../images/recreation/FortDesoto.jpg'

export function ListingDetail() {
  return (
    <>
      <h1 className="listing-name">Fort Desoto</h1>
      <div className="listing-photo">
        <img src={fortdesoto} alt="cocker spaniel at the beach" />
      </div>
      <div className="description">
        <p>
          <strong>Fort Desoto</strong> has the only dog park where dogs are
          allowed on the beach in a designated area. There are also 2 fenced-in
          areas near the beach for large and small dogs with water stations
          &#40;beach entrance is at the far southwest corner of dog park&#41;.
        </p>
      </div>
      <div className="contact-details">
        <div className="address">
          {/* <button className="listing-button">
            <i className="fas fa-map"></i>
          </button> */}

          <button className="button is-warning is-small">
            <i className="fas fa-map"></i>
          </button>
          <p>
            <strong>Address: </strong>3500 Pinellas Bayway S., Tierra Verde, FL
            33715
          </p>
        </div>
        <div className="phone">
          {/* <button className="listing-button">
            <i className="fas fa-phone">
              <a href="tel:+17275822100"></a>
            </i>
          </button> */}
          <button className="button is-warning is-small">
            <i className="fas fa-phone">
              <a href="tel:+17275822100"></a>
            </i>
          </button>

          <p>
            <strong>Phone: </strong>727-582-2100
          </p>
        </div>
        <div className="website">
          {/* <button className="listing-button">
            <i className="fas fa-globe"></i>
          </button> */}
          <button className="button is-warning is-small">
            <i className="fas fa-globe"></i>
          </button>

          <p>
            <strong>Website: </strong>
            <a href="https://www.pinellascounty.org/park/05_ft_desoto.htm">
              Fort Desoto Dog Beach
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
