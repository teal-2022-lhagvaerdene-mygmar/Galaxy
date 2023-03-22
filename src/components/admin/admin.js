import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./todos";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Categories } from "./Categories";
import { Articles } from "./Articles";
import { ArticlesNew } from "./ArticlesNew";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post(`http://localhost:4321/users/login`, {
        username,
        password,
      })
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          const { token } = data;
          localStorage.setItem("loginToken", token);
          window.location.reload();
        }
      })
      .catch(({ response, code }) => {
        // if (response.status === 401) {
        //     alert("Нууц үг эсвэл нэр буруу байна");
        // } else {
        //     alert(code);
        // }
      });
  }
  return (
    <div style={{ width: 200, margin: "2em auto" }}>
      <input
        className="form-control"
        placeholder="Хэрэглэгчийн нэр"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Нууц үг"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Нэвтрэх
      </button>
    </div>
  );
}
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
  if (!localStorage.getItem("loginToken")) {
    return <Login />;
  }
  function logout() {
    window.confirm("гарах уу");
    localStorage.removeItem("loginToken");
    window.location.reload();
  }

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
        <button onClick={logout}>Гарах</button>
      </Container>
    </Navbar>
  );
}
