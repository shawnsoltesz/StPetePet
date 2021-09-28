import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { isLoggedIn } from '../../auth'

interface Props {
  open: boolean
}

const Ul = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(243, 61, 20, 0.92);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    li {
      color: #3b1b09;
    }
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
            <i className="breadcrumb-icon fas fa-sign-in-alt"></i>&nbsp;Login
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
    </Ul>
  )
}

export default RightNav
