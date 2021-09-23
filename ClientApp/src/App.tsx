import React from 'react'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Login } from './Pages/Login'
import { NewAccount } from './Pages/NewAccount'
import { AdminWelcome } from './Pages/AdminWelcome'
import { UserAdmin } from './Pages/UserAdmin'
import { NewListing } from './Pages/NewListing'
import { SearchListings } from './Pages/SearchListing'
import { UpdateListing } from './Pages/UpdateListing'
import { ListingDetail } from './Pages/ListingDetail'

import logo from './images/stpetepet/SPPlogo.svg'

export function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="St Pete Pet logo of dog and cat at the beach." />
        </div>
      </header>
      <div>
        <nav className="top-nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Search Listings</li>
            {/* <li>Login</li>
            <li>Create Account</li>
            <li>Create Listing</li>
            <li>Update Listing</li> */}
          </ul>
        </nav>
      </div>

      <Home />
      <About />
      <Login />
      <NewAccount />
      <AdminWelcome />
      <UserAdmin />
      <NewListing />
      <SearchListings />
      <UpdateListing />
      <ListingDetail />
      <footer>
        <p>
          Built with <i className="heart fa fa-heart"></i> in St Petersburg,
          Florida. <i className="paw fas fa-paw"></i>
        </p>
      </footer>
    </>
  )
}
