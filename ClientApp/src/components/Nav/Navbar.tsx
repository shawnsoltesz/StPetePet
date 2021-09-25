import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

// import logo from '../images/stpetepet/SPPlogo.svg'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo-test">
        <p>StPete.Pet</p>
        {/* <img src={logo} alt="St Pete dot Pet website logo" /> */}
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
