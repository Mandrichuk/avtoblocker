import React from "react";

import images from "../constants/index";

import { AboutProps } from "../lib/interfaces";
import { aboutText } from "../constants";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";
import { useWindowWidth } from "../utils/useWindowWidth";

function About({ lang }: AboutProps) {
  const aboutTextData = aboutText[lang] || aboutText["en"];
  const windowWidth = useWindowWidth();

  return (
    <section className="aboutSection" id={navigationsText.about.id}>
      <div className="textSection">
        <h1 className="title">{toUpperCase(aboutTextData.title)}</h1>
        {"firstArticle" in aboutTextData && <p>{aboutTextData.firstArticle}</p>}
        {"accentArticle" in aboutTextData && (
          <p className="accentText">{aboutTextData.accentArticle}</p>
        )}
        {windowWidth < 1024 && (
          <div className="imgSection mobile">
            <img src={images.thief} alt="robbery" />
            {"secondArticle" in aboutTextData && (
              <p className="lastArticle">{aboutTextData.secondArticle}</p>
            )}
          </div>
        )}
        {"secondArticle" in aboutTextData && windowWidth > 1024  && (
          <p className="lastArticle">{aboutTextData.secondArticle}</p>
        )}
      </div>

      {windowWidth > 1024 && (
        <div className="imgSection">
          <img src={images.thief} alt="robbery" />
        </div>
      )}
    </section>
  );
}

export default About;
