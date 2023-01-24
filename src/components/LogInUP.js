import { Link } from "react-router-dom";
import { Client } from "./client/client";

function LogInUP() {
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
          />
          <h6 className="my-3">Password*</h6>
          <input
            placeholder="Your password"
            style={{ width: 340, height: 44 }}
          />
          <p>Must be at least 8 characters.</p>
          <button
            style={{
              backgroundColor: " #7F56D9",
              color: "white",
              width: 340,
              height: 44,
              borderRadius: 10,
            }}>
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
