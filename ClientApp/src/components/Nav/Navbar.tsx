import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import RightNav from './RightNav'

// import logo from './images/stpetepet/SPPlogo.svg'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
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
        Nav Bar
        {/* <img
          src={logo}
          alt="St Pete dot Pet logo of dog and cat at the beach."
        /> */}
      </div>
      <Burger />
      <RightNav open={undefined} />
    </Nav>
  )
}

export default Navbar
