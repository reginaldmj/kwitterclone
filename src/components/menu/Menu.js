import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/auth"
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch()
  const logout = () => dispatch(actions.logout())
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" style={{ backgroundColor: 'orange' }}>
      <Navbar.Brand style={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }} href="/profiles/:username">Chirp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {isAuthenticated ? (
          <>
            <Nav className="mr-auto">
              <Nav.Link href="/profiles/:username" style={{ color: 'white' }}>Newsfeed</Nav.Link>
              <Nav.Link href="/trending" style={{ color: 'white' }}>Trending</Nav.Link>
              <NavDropdown title="Profile" id="collasible-nav-dropdown" style={{ color: 'purple' }}>
                <NavDropdown.Item href="/profile" style={{ color: 'orange' }}>About</NavDropdown.Item>
                <NavDropdown.Item href="/edit-profile" style={{ color: 'orange' }}>Edit Profile</NavDropdown.Item>
                <NavDropdown.Item href="/following" style={{ color: 'orange' }}>Following</NavDropdown.Item>
                <NavDropdown.Item href="/followers" style={{ color: 'orange' }}>Followers</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="/search" style={{ color: 'white' }}>Search User</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#/" style={{ color: 'white' }} onClick={logout}>
                Log Out
          </Nav.Link>
            </Nav>
          </>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  )
}


{/* <div id="menu">
      <h1>Chirp</h1>
      <div id="menu-links">
        {isAuthenticated ? (
          <>
            <Link to="/profiles/:username">Newsfeed</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/followers">Followers</Link>
            <Link to="/search">Search User</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : null }
      </div>
    </div> */}