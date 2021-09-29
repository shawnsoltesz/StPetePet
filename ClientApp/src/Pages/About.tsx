import React from 'react'
import { Link } from 'react-router-dom'
import seal from '../images/stpetepet/stpetepetDraft.png'

export function About() {
  return (
    <>
      <div className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <p>
              <i className="breadcrumb-icon fas fa-home"></i>
              <Link to="/">Home</Link>
              &nbsp;/
            </p>
          </li>
          <li className="is-active">
            <p aria-current="page">
              &nbsp;
              <i className="breadcrumb-icon fas fa-info-circle"></i>&nbsp;About
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="listing-name">About</h1>
        <div className="about">
          <div className="seal">
            <img
              src={seal}
              alt="St Pete dot Pet circular seal containing an image of a dog and cat at the beach. Establish 2021"
            />
          </div>
          <div className="description">
            <p>
              <strong>StPete&#46;Pet</strong> is a website that celebrates
              St&#46; Petersburg&#44; FL as a city comprised of numerous local
              businesses and points of interest that welcome pets and their
              humans&#46;
            </p>
            <p>
              <strong>#PetsWelcomeHere</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
