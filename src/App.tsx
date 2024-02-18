import React from "react";
import "./scss/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Benefits from "./components/Benefits";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Order from "./components/Order";
import SystemManagment from "./components/SystemManagment";

function Page() {
  return (
    <>
      <Header />
      <About />
      <Advantages />
      <Benefits />
      <Catalog />
      <Order />
      <SystemManagment />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
