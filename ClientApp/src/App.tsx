import React from 'react'
// import HamburgerMenu from './components/HamburgerMenu'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";
//import logo from '.images/logo/stpetepetDraft.png'

export function App() {
  return (
    <>
      <header>
        {/* <img
          src={logo}
          alt="St Pete Pet logo of dog and cat at the beach."
          height="64"
          width="64"
        /> */}

        <h1>StPete.Pet</h1>
      </header>
      <footer>
        <p>
          Built with <i className="fas fa-paw"></i> in St. Petersburg, Florida.
        </p>
        {/* <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p> */}
      </footer>
    </>
  )
}
