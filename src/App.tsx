import React, { useState } from "react";
import "./scss/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Benefits from "./components/Benefits";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Order from "./components/Order";
import Managment from "./components/Managment";
import HowItWorks from "./components/HowItWorks";


import images from "./constants/index";

import { useWindowWidth } from "./utils/useWindowWidth";
import ZoomDisable from "./utils/ZoomDisable";

function Page() {
  // ru, en, sk
  const [lang, setLang] = useState<"en" | "ru" | "sk">("en");
  const windowWidth = useWindowWidth();

  const changeLang = (newLang: "en" | "ru" | "sk"): void => {
    setLang(newLang);
  };

  return (
    <>
      <ZoomDisable />
      <Header changeLang={changeLang} lang={lang} />
      <div className="wrapper">
        <About lang={lang} />
        <Benefits lang={lang} />
      </div>

      <Catalog lang={lang} />
      <Managment lang={lang} />
      {windowWidth < 1024 && (
        <div className="vectorImage">
          <img src={images.vectorCar} alt="robbery" />
        </div>
      )}
      <div className="wrapper">
        <HowItWorks lang={lang} />
        <Advantages lang={lang} />
        <Order lang={lang} />
      </div>
      <Footer lang={lang} />
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
