import React from 'react'
import { Route, Switch } from 'react-router'

import Navbar from './components/Nav/Navbar'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Listings } from './Pages/Listings'
import { ListingDetail } from './Pages/ListingDetail'
import { Login } from './Pages/Login'
import { NewUser } from './Pages/NewUser'
import { AdminWelcome } from './Pages/AdminWelcome'
import { NewListing } from './Pages/NewListing'
import { UpdateListing } from './Pages/UpdateListing'
import { UserAdmin } from './Pages/UserAdmin'

export function App() {
  return (
    <>
      <body>
        <header className="navbar">
          <Navbar />
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
          <Route exact path="/admin/new-user">
            <NewUser />
            <Route exact path="/admin/user-admin">
              <UserAdmin />
            </Route>
          </Route>
          <Route exact path="/admin/new-listing">
            <NewListing />
          </Route>
          <Route exact path="/admin/update-listing">
            <UpdateListing />
          </Route>
        </Switch>

        <footer>
          <p>
            Built with <i className="heart fa fa-heart"></i> in St Petersburg,
            Florida. <i className="paw fas fa-paw"></i>
          </p>
        </footer>
      </body>
    </>
  )
}
