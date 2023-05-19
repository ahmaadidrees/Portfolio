import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, NavItem } from 'react-bootstrap';
import { IoMoon, IoSunny, IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ isDarkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar
      style={{ padding: '30px' }}
      bg={isDarkMode ? 'dark' : 'light'}
      variant={isDarkMode ? 'dark' : 'light'}
      expand="lg"
      fixed="top"
      expanded={menuOpen}
    >
      <Navbar.Brand
        className="nav-title"
        as={Link}
        to="/"
        onClick={() => {
          setMenuOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Ahmaad Idrees
      </Navbar.Brand>
      <Navbar.Toggle
      style={{ border: 'none',outline: 'none', boxShadow: 'none !important' }}
  aria-controls="basic-navbar-nav"
  onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? (
    <IoClose size={30} /> // Set the desired size for the close icon
  ) : (
    <IoMenu size={30} /> // Set the desired size for the menu icon
  )}
</Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/services"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Services
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/projects"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Contact
          </Nav.Link>
        </Nav>
        <Form inline></Form>
        <NavItem>
          <Button
            variant={isDarkMode ? 'dark' : 'light'}
            bg={isDarkMode ? 'dark' : 'light'}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <IoSunny /> : <IoMoon />}
          </Button>
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
