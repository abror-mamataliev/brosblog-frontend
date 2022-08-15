import {
  Button,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  logoBrand,
  logoColor,
  logoFile,
  logoFont,
  logoGenerator,
  logoUrl,
} from "service";


const Header = () => {
  const logo = logoGenerator(logoUrl, logoFont, logoBrand, logoFile, logoColor);

  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt={logoBrand} height={50}/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">Main page</Link>
              <Link to="/categories" className="nav-link">Categories</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Button variant="outline-light" onClick={() => {
                window.location.href = "/auth/login";
              }}>Login/Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
