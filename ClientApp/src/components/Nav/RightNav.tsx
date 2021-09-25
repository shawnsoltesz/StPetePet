import React from 'react'
import styled from 'styled-components'

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
      <li>Home</li>
      <li>About</li>
      <li>Search Listings</li>
    </Ul>
  )
}

export default RightNav
