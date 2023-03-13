import './App.css';
import React from 'react';
import "./css/login.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/react/Login" element={<Login />} />
        <Route path="/react" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
