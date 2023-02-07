import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./todos";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import { Categories } from "./Categories";
import { Articles } from "./Articles";
import { ArticlesNew } from "./ArticlesNew";
import { useContext } from "react";
import { UserContext } from "../../App";

export function Admin() {
  return (
    <>
      <AdminNavbar />
      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/" element={<div>Welcome to admin</div>} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={<ArticlesNew />} />
        </Routes>
      </div>
    </>
  );
}

function AdminNavbar() {
  const userName = useContext(UserContext);

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
            <Nav.Link to="/admin" as={NavLink}>
              Admin
            </Nav.Link>
            <Nav.Link to="/admin/categories" as={NavLink}>
              Categories
            </Nav.Link>
            <Nav.Link to="/admin/todos" as={NavLink}>
              Todo
            </Nav.Link>
            <Nav.Link to="/admin/articles" as={NavLink}>
              Articles
            </Nav.Link>
            <Nav.Link to="" as={NavLink}>
              <strong>{userName.name}</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
