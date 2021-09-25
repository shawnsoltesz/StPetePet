import React from 'react'
import { Route, Switch } from 'react-router'

import Navbar from './components/Nav/Navbar'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Listings } from './Pages/Listings'
import { ListingDetail } from './Pages/ListingDetail'
import { Login } from './Pages/Login'
import { NewAccount } from './Pages/NewAccount'
import { AdminWelcome } from './Pages/AdminWelcome'
import { NewListing } from './Pages/NewListing'
import { UpdateListing } from './Pages/UpdateListing'
import { UserAdmin } from './Pages/UserAdmin'

// import logo from './images/stpetepet/SPPlogo.svg'

export function App() {
  return (
    <>
      <div className="navbar">
        <header>
          <Navbar />
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <NewListing />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/search">
            <Listings />
          </Route>
          <Route exact path="/listings/:id">
            <ListingDetail />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/newaccount">
            <NewAccount />
          </Route>
          <Route exact path="/admin">
            <AdminWelcome />
          </Route>
          <Route exact path="/updatelisting">
            <UpdateListing />
          </Route>
          <Route exact path="/accountadmin">
            <UserAdmin />
          </Route>
        </Switch>

        <footer>
          <p>
            Built with <i className="heart fa fa-heart"></i> in St Petersburg,
            Florida. <i className="paw fas fa-paw"></i>
          </p>
        </footer>

        {/* <header>
          <div className="logo">
            <img
              src={logo}
              alt="St Pete Pet logo of dog and cat at the beach."
            />
          </div>
        </header>
        <div>
          <nav className="top-nav">
            <ul>
              <li className="nav-button">Home</li>
              <li className="nav-button">About</li>
              <li className="nav-button">Search Listings</li>
              <li>Login</li>
            <li>Create Account</li>
            <li>Create Listing</li>
            <li>Update Listing</li>
            </ul>
          </nav>
        </div> */}
      </div>
    </>
  )
}
