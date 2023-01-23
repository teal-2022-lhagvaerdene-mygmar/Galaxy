import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "../todos";
import { Link, Route, Routes } from "react-router-dom";
import { Editing } from "../editing";
import { Categories } from "./Categories";

export function Admin() {
  return (
    <>
      <AdminNavbar />
      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/" element={<div>Welcome to admin</div>} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

function AdminNavbar() {
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
            <Nav.Link to="/admin" as={Link}>
              Admin
            </Nav.Link>
            <Nav.Link to="/admin/categories" as={Link}>
              Categories
            </Nav.Link>
            <Nav.Link to="/admin/todos" as={Link}>
              Todos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
