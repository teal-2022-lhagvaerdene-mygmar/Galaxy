import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./header.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./components/admin/admin";
import { ToastContainer } from "react-toastify";
import { SignUp } from "./components/SignUp";
import LogInUP from "./components/LogInUP";
import { createContext } from "react";
import { Home } from "./components/home/Home";

export const UserContext = createContext("guest");
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
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer position="top-right" />
    </BrowserRouter>
  );
}
export default App;
