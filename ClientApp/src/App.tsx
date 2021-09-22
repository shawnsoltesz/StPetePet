import React from 'react'
// import { Home } from './Pages/Home'
// import { ListingDetail } from './Pages/ListingDetail'
// import { About } from './Pages/About'
// import { Login } from './Pages/Login'
// import { NewAccount } from './Pages/NewAccount'
// import { NewListing } from './Pages/NewListing'
import { SearchListing } from './Pages/SearchListing'
import logo from './images/stpetepet/SPPlogo.svg'

export function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="St Pete Pet logo of dog and cat at the beach." />
        </div>
      </header>
      <SearchListing />
      <footer>
        <p>
          Built with <i className="heart fa fa-heart"></i> in St Petersburg,
          Florida. <i className="paw fas fa-paw"></i>
        </p>
      </footer>
    </>
  )
}
