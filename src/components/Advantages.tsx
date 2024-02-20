import React from "react";

import { AdvantagesProps } from "../lib/interfaces";
import { advantagesText } from "../constants/index";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";

function Advantages({ lang }: AdvantagesProps) {
  const advantagesTextData = advantagesText[lang] || advantagesText["en"];

  return (
    <section className="advantagesSection" id={navigationsText.advantages.id}>
      <div className="title">{toUpperCase(advantagesTextData.title)}</div>
      <div className="advantagesGrid">
        {"advantages" in advantagesTextData &&
          advantagesTextData.advantages.map((advantage, index) => (
            <div key={`advantage-${index}`} className="advantage">
              <div className="icon">
                <img src={advantage.image} alt="robbery" />
              </div>
              <div className="text">
                <div className="subtitle">{advantage.title}</div>
                <div className="article">{advantage.article}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Advantages;
