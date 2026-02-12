import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Pages/Login.jsx";
import Users from "./Pages/Users.jsx";
import Register from "./Pages/Register.jsx";

createRoot(document.getElementById("root")).render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>,
  </>
);
