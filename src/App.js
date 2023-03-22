import './App.css';
import React from 'react';
import "./css/login.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Redux from "./pages/Redux";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Redux" element={<Redux />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
