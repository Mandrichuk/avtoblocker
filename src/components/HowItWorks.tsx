import React from "react";

import Title from "./Title";

import { HowItWorksProps } from "../lib/interfaces";
import { howItWorksText } from "../constants";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";

function HowItWorks({ lang }: HowItWorksProps) {
  const howItWorksTextData = howItWorksText[lang] || howItWorksText["en"];

  return (
    <section className="howItWorksSection" id={navigationsText.howItWorks.id}>
      <Title>{toUpperCase(howItWorksTextData.title)}</Title>
      <div className="text">
        <div className="subtitle">{howItWorksTextData.subtitle}</div>
        <div className="article">{howItWorksTextData.article}</div>
        {"description" in howItWorksTextData && (
          <div className="description">{howItWorksTextData.description}</div>
        )}
      </div>
    </section>
  );
}

export default HowItWorks;
