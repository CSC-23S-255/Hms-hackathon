import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor:'Black',position:"sticky"}}>
      <Container>
        <Navbar.Brand style={{marginRight:"150px",fontFamily:"sans-serif",fontSize:"30px",color:"white"}} href="#home"><span style={{color:"gold",fontFamily:"fantasy"}}>GOLDEN's </span>Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={{marginLeft:"200px",color:"gold",fontSize:"20px",fontFamily:"sans-serif"}} to={"/dashboard"}>Home</NavLink>
            <NavLink style={{marginLeft:"50px",color:"gold",fontSize:"20px",fontFamily:"sans-serif"}} to={'/services'}>Services</NavLink>
            <NavLink style={{marginLeft:"50px",color:"gold",fontSize:"20px",fontFamily:"sans-serif"}} to={'/room'}>Rooms</NavLink>
            <NavLink style={{marginLeft:"50px",color:"gold",fontSize:"20px",fontFamily:"sans-serif"}} to={'/booking'}>Booking</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;