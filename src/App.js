import './App.css';
import React from 'react';
// import { useNavigate } from "react-router-dom";
import "./css/login.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";


function App() {
  
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
