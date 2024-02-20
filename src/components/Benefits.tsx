import React from "react";

import { BenefitsProps } from "../lib/interfaces";
import { benefitsText } from "../constants";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";
import { useWindowWidth } from "../utils/useWindowWidth";

function Benefits({ lang }: BenefitsProps) {
  const benefitsTextData = benefitsText[lang] || benefitsText["en"];

  return (
    <section className={`benefitsContainer`} id={navigationsText.benefits.id}>
      <h1 className="title">{toUpperCase(benefitsTextData.title)}</h1>
      <div className="benefitsGrid">
        {"benefits" in benefitsTextData &&
          benefitsTextData.benefits.map((benefit, index) => (
            <div key={`benefit-${index}`} className="benefit">
              <div className="icon">{React.createElement(benefit.icon)}</div>
              <div className="text">
                <div className="subtitle">{benefit.title}</div>
                <div className="article">{benefit.article}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Benefits;
