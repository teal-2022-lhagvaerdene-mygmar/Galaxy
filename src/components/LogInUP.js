import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Client } from "./client/client";
import axios from "axios";
function LogInUP() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:4321/admin`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setAdmin(data);
        console.log(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, []);
  console.log(admin.email);
  function logInEnter() {
    if (email === admin.email && password === admin.password) {
      window.location = "/admin";
    } else {
      alert("jjj");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <>
      <Client />
      <div className="align-items-center position-absolute top-50 start-50 translate-middle">
        <h1>Log in</h1>

        <form className="my-3">
          <h6 className="my-3">Email*</h6>
          <input
            placeholder="Enter your email"
            style={{ width: 340, height: 44 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6 className="my-3">Password*</h6>
          <input
            placeholder="Your password"
            style={{ width: 340, height: 44 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Must be at least 8 characters.</p>
          <button
            style={{
              backgroundColor: " #7F56D9",
              color: "white",
              width: 340,
              height: 44,
              borderRadius: 10,
            }}
            onClick={logInEnter}>
            Log in
          </button>
          <p style={{ fontSize: 14 }} className="text-center">
            Already have an account? <Link to={"/signup/*"}>Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}
export default LogInUP;
