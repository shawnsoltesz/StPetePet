import React from 'react'
// import StPete from '../images/map/map-stpete-fl.gif'

export function Home() {
  return (
    <>
      <main>
        <div className="breadcrumb">
          <ul>
            <li>
              <p>
                <i className="breadcrumb-icon fas fa-home"></i>
                &nbsp;Home
              </p>
            </li>
          </ul>
        </div>
        <h1 className="listing-name">Hello World</h1>
        <p className="construction">
          <i className="fas fa-hammer">&nbsp;</i>Page under construction&nbsp;
          <i className="fas fa-tools"></i>
        </p>
      </main>
    </>
  )
}
