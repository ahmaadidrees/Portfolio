import { Navbar, Nav, Form, Button, NavItem, NavLink } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

function NavBar({isDarkMode, toggleDarkMode}) {
 

  return (
    <Navbar style={{padding:'30px'}} bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} expand="lg" fixed="top">
      {/* <img style={{height:"80px", width:"80px"}} src={!isDarkMode ? "/images/BlackLogo.png" : "/images/WhiteLogo.png"} /> */}
      <Navbar.Brand style={{fontSize:"30px"}} href="#home">Ahmaad Idrees</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
        </Form>
        <NavItem>
          <Button variant={isDarkMode ? "dark" : "light"} bg={isDarkMode ? "dark" : "light"} onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
