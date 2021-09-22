import React from 'react'
import StPete from './images/map/map-stpete-fl.gif'

export function Home() {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search..." />
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
