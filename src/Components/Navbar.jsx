import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll'
import './Navbar.css'

function MyNavbar() {
  return (
    <Navbar expand="lg" className="Navbody">
      <Container>
        <Navbar.Brand href="#home">Azizz Mills</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link 
            to='Home'
            duration={2000}
            >
            <Nav.Link className='underlineOnHover'>Home</Nav.Link>
            </Link> 
            <Link 
            to='About-Me'
            duration={2000}
            offset={-130}
            >
            <Nav.Link className='underlineOnHover'>About Me</Nav.Link>
            </Link>           
            <Link 
            to='Skills'
            duration={2000}
            offset={-150}
            >
            <Nav.Link className='underlineOnHover'>Skills</Nav.Link>
            </Link>
            <Link 
            to='Career'
            duration={2000}
            offset={-150}
            >
            <Nav.Link className='underlineOnHover'>Career</Nav.Link>
            </Link>
            <Link 
            to='Projects'
            duration={2000}
            offset={-150}
            >
            <Nav.Link className='underlineOnHover'>Projects</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;