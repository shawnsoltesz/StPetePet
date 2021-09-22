import React from 'react'

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";
import logo from './images/logo/stpetepetDraft.png'
import stpete from './images/map/map-stpete-fl.gif'

export function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="St Pete Pet logo of dog and cat at the beach." />
        </div>
      </header>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="mapimage">
        <img src={stpete} alt="aerial map of St Petersburg, FL" />
      </div>

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
      <footer>
        <p>
          Built with <i className="heart fa fa-heart"></i> in St Petersburg,
          Florida. <i className="paw fas fa-paw"></i>
        </p>
      </footer>
    </>
  )
}
