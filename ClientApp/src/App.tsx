import React, { useState } from 'react'
//import './styles.css'
import HamburgerMenu from './components/HamburgerMenu'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components'
// import logo from '.images/logo/stpetepetDraft.png'

const MenuLabel = styled.label`
  background-color: #b6edc8;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`

const Icon = styled.span`
  position: relative;
  background-color: black;
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;

  &::before,
  &::after {
    content: '';
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`
${MenuLabel}:hover &::before {
  top: ${(props) => (props.clicked ? “0” : “-1rem”)};
 }
 ${MenuLabel}:hover &::after {
  top: ${(props) => (props.clicked ? “0” : “1rem”)};
 }
export function App() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <header>
        {/* <img
          src={logo}
          alt="St Pete Pet logo of dog and cat at the beach."
          height="64"
          width="64"
        /> */}

<Router>
        <HamburgerMenu />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>

        <h1>StPete.Pet</h1>
      </header>
      <footer>
        <p>
          Built with <i className="fas fa-paw"></i> in St. Petersburg, Florida.
        </p>
        {/* <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p> */}
      </footer>
    </>
  )
}
