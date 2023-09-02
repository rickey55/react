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
<<<<<<< HEAD
        <Route path="/Test" element={<Test />} />
=======
>>>>>>> 43a06a847a1db0eb15ab8cde107d4de78059429c
      </Routes>
    </BrowserRouter>
  );
}

export default App;
