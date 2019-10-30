import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'

const Navigation = (props) => {
  const [ activeLink, setActiveLink ] = useState(false)

  const toggle = () => setActiveLink(!activeLink)

  return (
    <Container fluid>
      <Navbar>
        <Nav tabs>
          <NavItem active>
            <NavLink
              tag= { Link }
              to="/"
              alt="Home"
            >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag= { Link }
              to="/bio"
              alt="Bio"
            >Bio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag= { Link }
              to="/projects"
              alt="Projects"
            >Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag= { Link }
              to="/contact"
              alt="Contact"
            >Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Navigation

// <div id="nav">
//   <Link to="/">Home</Link>
//   <Link to="/bio">Bio</Link>
//   <Link to="/projects">Projects</Link>
//   <Link to="/contact">Contact</Link>
//   <Link to="/inspiration">Inspiration</Link>
// </div>
