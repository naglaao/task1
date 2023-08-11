import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';


import Register from './components/Register'
import Login from './components/Login'

import Wellcome from "./components/Wellcome";

const App = () => {
  return (
    <>



      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Wellcome" element={<Wellcome />} />
      </Routes>
    </>
  );
}; export default App;
