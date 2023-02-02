import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <HomeNavbar />
    </>
  );
}
function HomeNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/blog" as={NavLink}>
              Blog
            </Nav.Link>
            <Nav.Link to="/news" as={NavLink}>
              News
            </Nav.Link>
            <Nav.Link to="/signup" as={NavLink}>
              Sign Up
            </Nav.Link>
            <Nav.Link to="/loginup" as={NavLink}>
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
