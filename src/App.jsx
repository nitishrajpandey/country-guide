import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/HomePages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./pages/CardDetails/CardDetails";

function App() {
  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardDetail/:country" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
