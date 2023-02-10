import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Route, Routes } from "react-router-dom";

export function Home() {
  return (
    <>
      <HomeNavbar />
      <div style={{ maxWidth: 1100 }}>
        <Routes>
          <Route path="/" element={<div>Welcome to admin</div>} />
        </Routes>
      </div>
    </>
  );
}
function HomeNavbar() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Nav.Link to="/" as={Link}>
            <img
              src="alex-fxrwJGMCz_g-unsplash.jpeg"
              alt="l logo"
              width={100}
              height={100}
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/blog/" as={NavLink}>
              Blog
            </Nav.Link>
            <Nav.Link to="/news" as={NavLink}>
              News
            </Nav.Link>
            <Nav.Link to="/signup/*" as={NavLink}>
              Sign Up
            </Nav.Link>
            <Nav.Link to="/loginup/*" as={NavLink}>
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
