import React from 'react'
import fortdesoto from '../images/listings/FortDesoto.jpg'

export function ListingDetail() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <i className="home fas fa-home"></i> <u>Home</u> /
            </p>
          </li>
          <li className="is-active">
            <p aria-current="page">
              {' '}
              &nbsp;<u>Listing Detail</u>
            </p>
          </li>
        </ul>
      </div>
      <h1 className="listing-name">Fort Desoto</h1>
      <div className="listing-photo">
        <img src={fortdesoto} alt="cocker spaniel at the beach" />
      </div>

      <div className="description">
        <p>
          Fort Desoto has the only dog park where dogs are allowed on the beach
          in a designated area. There are also 2 fenced-in areas near the beach
          for large and small dogs with water stations &#40;beach entrance is at
          the far southwest corner of dog park&#41;.
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-buttons">
          <ul>
            <li>
              <button className="map">
                <i className="fas fa-map"></i>
              </button>
            </li>
            <li>
              <button className="phone">
                <i className="fas fa-phone">
                  <a href="tel:+17275822100"></a>
                </i>
              </button>
            </li>
            <li>
              <button className="web-search">
                <i className="fas fa-globe"></i>
              </button>
            </li>
          </ul>
        </div>
        <ul className="address">
          <li>
            <p>
              <strong>Address: </strong>3500 Pinellas Bayway S., Tierra Verde,
              FL 33715
            </p>
          </li>

          <li className="phone">
            <p>
              <strong>Phone: </strong>727-582-2100
            </p>
          </li>

          <li className="website">
            <p>
              <strong>Website: </strong>
              <a href="https://www.pinellascounty.org/park/05_ft_desoto.htm">
                Fort Desoto Dog Beach
              </a>
            </p>
          </li>
        </ul>
        <div className="rating">
          <p>
            <i className="useful fas fa-paw"></i> &nbsp;Useful &#40;0&#41;
          </p>
          <p>
            <i className="not-useful fas fa-paw"></i>&nbsp; Not Useful
            &#40;0&#41;
          </p>
        </div>
      </div>
    </>
  )
}
