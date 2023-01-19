import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="align-items-center position-absolute top-50 start-50 translate-middle">
      <h1>Sign up</h1>

      <form className="my-3">
        <h6 className="my-3">Name*</h6>
        <input
          placeholder="Enter your name"
          style={{ width: 340, height: 44 }}
        />
        <h6 className="my-3">Email*</h6>
        <input
          placeholder="Enter your email"
          style={{ width: 340, height: 44 }}
        />
        <h6 className="my-3">Password*</h6>
        <input
          placeholder="Create a password"
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
          Create account
        </button>
        <p style={{ fontSize: 14 }} className="text-center">
          Already have an account? <Link to={"/signup/login/*"}> Log in</Link>
        </p>
      </form>
    </div>
  );
}
