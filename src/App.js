import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./header.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/admin/admin";
import { ToastContainer } from "react-toastify";
import { createContext } from "react";
import { Client } from "./components/client/client";
import axios from "axios";
export const UserContext = createContext("guest");
axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "loginToken",
)}`;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <UserContext.Provider value={{ name: "balgan" }}>
              <Admin />
            </UserContext.Provider>
          }
        />
        <Route path="*" element={<Client />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}
export default App;
