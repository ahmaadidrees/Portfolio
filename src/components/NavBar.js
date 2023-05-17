import { Navbar, Nav, Form, Button, NavItem, NavLink } from 'react-bootstrap';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar({isDarkMode, toggleDarkMode}) {
 

  return (
    <Navbar style={{padding:'30px'}} bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} expand="lg" fixed="top">
      {/* <img style={{height:"80px", width:"80px"}} src={!isDarkMode ? "/images/BlackLogo.png" : "/images/WhiteLogo.png"} /> */}
      <Navbar.Brand className='nav-title'  as = {Link} to = "/"  onClick={()=>{  window.scrollTo({ top: 0, behavior: 'smooth' });}}>Ahmaad Idrees</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as = {Link} to = "/"  onClick={()=>{ window.scrollTo({ top: 0, behavior: 'smooth' });}}>Home</Nav.Link>
          <Nav.Link as = {Link} to = "/services"  onClick={()=>{  window.scrollTo({ top: 0, behavior: 'smooth' });}}>Services</Nav.Link>
          <Nav.Link as = {Link} to = "/projects"  onClick={()=>{  window.scrollTo({ top: 0, behavior: 'smooth' });}}>Projects</Nav.Link>
          <Nav.Link as = {Link} to = "/about"  onClick={()=>{  window.scrollTo({ top: 0, behavior: 'smooth' });}}>About</Nav.Link>
          <Nav.Link as = {Link} to = "/contact"  onClick={()=>{  window.scrollTo({ top: 0, behavior: 'smooth' });}}>Contact</Nav.Link>
        </Nav>
        <Form inline>
        </Form>
        <NavItem>
          <Button variant={isDarkMode ? "dark" : "light"} bg={isDarkMode ? "dark" : "light"} onClick={toggleDarkMode}>
            {isDarkMode ? <IoSunny /> : <IoMoon />}
          </Button>
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
