import React from "react";
import "./App.css";
import HeaderExam from "./components/HeaderExam";
import FooterExam from "./components/FooterExam";
import Developer from "./pages/Developer";
import TaxiCal from "./pages/TaxiCal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div class="container">
        <HeaderExam />
        <Routes>
          <Route path="/" element={<Developer />} />
          <Route path="/taxical" element={<TaxiCal />} />
        </Routes>
        <FooterExam />
      </div>
    </>
  );
}

export default App;
