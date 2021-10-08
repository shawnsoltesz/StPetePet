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
import { EditListing } from './Pages/EditListing'
import { isLoggedIn, logout } from './auth'
import { Link } from 'react-router-dom'

import logo from './images/stpetepet-logo.png'

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
                <img
                  src={logo}
                  alt="St Pete dot Pet website logo"
                  width="200"
                  height="45"
                />
              </Link>
            </li>
          </ul>

          <ul className="nav-right">
            <li>
              <Link to="/">
                <i className="breadcrumb-icon fas fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="breadcrumb-icon fas fa-info-circle"></i>
              </Link>
            </li>
            <li>
              <Link to="/listings">
                <i className="breadcrumb-icon fas fa-search"></i>
              </Link>
            </li>
            {isLoggedIn() ? null : (
              <li>
                <Link to="/adduser">
                  <i className="breadcrumb-icon fas fa-user-plus"></i>
                </Link>
              </li>
            )}
            {isLoggedIn() ? null : (
              <li>
                <Link to="/login">
                  <i className="breadcrumb-icon fas fa-sign-in-alt"></i>
                </Link>
              </li>
            )}

            {isLoggedIn() ? (
              <li>
                <Link to="/admin">
                  <i className="breadcrumb-icon fas fa-paw"></i>&nbsp;
                </Link>
              </li>
            ) : null}
            {isLoggedIn() ? (
              <li>
                <a
                  href="/"
                  className="link"
                  onClick={function (event) {
                    event.preventDefault()
                    handleLogout()
                  }}
                >
                  <i className="breadcrumb-icon fas fa-sign-out-alt"></i>&nbsp;
                </a>
              </li>
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
        <Route exact path="/adduser">
          <NewUser />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/admin">
          <AdminWelcome />
        </Route>
        {isLoggedIn() ? null : <Link to="/admin"></Link>}
        <Route exact path="/admin/updateuser">
          <UpdateUser />
        </Route>
        <Route exact path="/admin/addlisting">
          <NewListing />
        </Route>
        <Route exact path="/listings/:id/edit">
          <EditListing />
        </Route>
      </Switch>

      <footer>
        <div className="footer-left">
          <ul>
            <li>
              <a href="http://www.facebook.com/stpetepet">
                <i className="facebook fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/stpetepet">
                <i className="instagram fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <p>
            Built with <i className="heart fa fa-heart"></i> in St Petersburg,
            Florida. <i className="paw fas fa-paw"></i>
          </p>
        </div>
      </footer>
    </>
  )
}
