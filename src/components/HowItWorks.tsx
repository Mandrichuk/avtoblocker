import React from "react";

import images from "../constants/index";

import { HowItWorksProps } from "../lib/interfaces";
import { howItWorksText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";

function HowItWorks({ lang }: HowItWorksProps) {
  const howItWorksTextData = howItWorksText[lang] || howItWorksText["en"];

  return (
    <section className="howItWorksSection">
      <div className="text">
        <h1 className="title">{toUpperCase(howItWorksTextData.title)}</h1>
        <div className="subtitle">{howItWorksTextData.subtitle}</div>
        <div className="article">{howItWorksTextData.article}</div>
        {"description" in howItWorksTextData && <div className="description">{howItWorksTextData.description}</div>}
      </div>
      <div className="imgContainer">
      {/* <img  src={images.robbery} alt="robbery" /> */}
      </div>
    </section>
  );
}

export default HowItWorks;
