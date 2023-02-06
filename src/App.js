import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./header.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/admin/admin";
import { ToastContainer } from "react-toastify";
import { Client } from "./components/client/client";
import { SignUp } from "./components/SignUp";
import LogInUP from "./components/LogInUP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<Client />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginup/*" element={<LogInUP />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}

export default App;
