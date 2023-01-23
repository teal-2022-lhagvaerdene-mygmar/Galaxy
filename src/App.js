import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/admin/admin";
import { ToastContainer } from "react-toastify";
import { Client } from "./components/client/client";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />

        <Route path="*" element={<Client />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}

export default App;
