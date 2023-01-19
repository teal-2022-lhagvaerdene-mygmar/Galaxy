import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Client } from "./components/client/client";
import { SignUp } from "./components/client/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="*" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
