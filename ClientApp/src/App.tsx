import React from 'react'
import { Route, Switch } from 'react-router'

// import Navbar from './components/Nav/Navbar'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Listings } from './Pages/Listings'
import { ListingDetail } from './Pages/ListingDetail'
import { Login } from './Pages/Login'
import { AdminWelcome } from './Pages/AdminWelcome'
import { NewUser } from './Pages/NewUser'
import { UpdateUser } from './Pages/UpdateUser'
import { NewListing } from './Pages/NewListing'
import { UpdateListing } from './Pages/UpdateListing'
import { isLoggedIn, logout } from './auth'
import { Link } from 'react-router-dom'

import logo from './images/stpetepet/SPPlogo.svg'

export function App() {
  function handleLogout() {
    logout()

    window.location.assign('/')
  }
  return (
    <>
      <header>
        <div className="nav">
          <ul className="nav-left">
            <li>
              <Link to="/">
                <a>
                  <img
                    src={logo}
                    alt="St Pete dot Pet website logo"
                    width="200"
                    height="45"
                  />
                </a>
              </Link>
            </li>
          </ul>

          <ul className="nav-right">
            <li>
              <i className="breadcrumb-icon fas fa-home"></i>&nbsp;
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="breadcrumb-icon fas fa-info-circle"></i>&nbsp;
              <Link to="/about">About</Link>
            </li>
            <li>
              <i className="breadcrumb-icon fas fa-search"></i>&nbsp;
              <Link to="/listings">Search Listings</Link>
            </li>
            {isLoggedIn() ? null : (
              <li>
                <Link to="/login">
                  <i className="breadcrumb-icon fas fa-sign-in-alt"></i>
                  &nbsp;Login
                </Link>
              </li>
            )}

            {isLoggedIn() ? (
              <li>
                <Link to="/admin">
                  <i className="breadcrumb-icon fas fa-paw"></i>&nbsp;Admin
                </Link>
              </li>
            ) : null}
            {isLoggedIn() ? (
              <a
                href="/"
                className="link"
                onClick={function (event) {
                  event.preventDefault()
                  handleLogout()
                }}
              >
                <i className="breadcrumb-icon fas fa-sign-out-alt"></i>&nbsp;
                Sign out
              </a>
            ) : null}
          </ul>
        </div>
        <div className="breadcumb"></div>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/listings">
          <Listings />
        </Route>
        <Route exact path="/listings/:id">
          <ListingDetail />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/admin">
          <AdminWelcome />
        </Route>
        {isLoggedIn() ? null : <Link to="/admin">Admin</Link>}
        <Route exact path="/admin/adduser">
          <NewUser />
        </Route>
        <Route exact path="/admin/updateuser">
          <UpdateUser />
        </Route>
        <Route exact path="/admin/addlisting">
          <NewListing />
        </Route>
        <Route exact path="/admin/updatelisting">
          <UpdateListing />
        </Route>
      </Switch>

      <footer>
        <p>
          Built with <i className="heart fa fa-heart"></i> in St Petersburg,
          Florida. <i className="paw fas fa-paw"></i>
        </p>
      </footer>
    </>
  )
}
