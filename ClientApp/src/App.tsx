import React from 'react'
// import { Home } from './components/Pages/Home'
import { ListingDetail } from './Pages/ListingDetail'
import logo from './images/logo/stpetepetDraft.png'

export function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="St Pete Pet logo of dog and cat at the beach." />
        </div>
      </header>
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
