import React from "react";

import images from "../constants/index";

import { AboutProps } from "../lib/interfaces";
import { aboutText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";
import { useWindowWidth } from "../utils/useWindowWidth";

function About({ lang }: AboutProps) {
  const aboutTextData = aboutText[lang] || aboutText["en"];
  const windowWidth = useWindowWidth();

  return (
    <div className="aboutContainer">
      <div className="textSection">
        <h1 className="title">{toUpperCase(aboutTextData.title)}</h1>
        {"firstArticle" in aboutTextData && <p>{aboutTextData.firstArticle}</p>}
        {"accentArticle" in aboutTextData && (
          <p className="accentText">{aboutTextData.accentArticle}</p>
        )}
        {windowWidth < 1024 && (
          <div className="imgSection mobile">
            <img src={images.robbery} alt="robbery" />
          </div>
        )}
        {"secondArticle" in aboutTextData && (
          <p>{aboutTextData.secondArticle}</p>
        )}
      </div>

      {windowWidth > 1024 && (
        <div className="imgSection">
          <img src={images.robbery} alt="robbery" />
        </div>
      )}
    </div>
  );
}

export default About;
