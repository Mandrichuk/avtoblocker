import React from "react";

import Title from "./Title";

import images from "../constants/index";

import { ManagementProps } from "../lib/interfaces";
import { managementText } from "../constants/index";
import { navigationsText } from "../constants";

import { useWindowWidth } from "../utils/useWindowWidth";
import { toUpperCase } from "../utils/toUpperCase";

function Managment({ lang }: ManagementProps) {
  const managementTextData = managementText[lang] || managementText["en"];
  const windowWidth = useWindowWidth();

  return (
    <section className="managmentSection" id={navigationsText.managment.id}>
      <div className="wrapper">
        <Title>{toUpperCase(managementTextData.title)}</Title>
        <div className="subtitle">{managementTextData.subtitle}</div>
        <div className="details">
          <div className="on">
            <img src={images.buttonON} alt="buttonON" />
            {"activeBlocker" in managementTextData && (
              <p className="subtitle">
                {managementTextData.activeBlocker.title}
              </p>
            )}
            <div className="onGrid">
              {"activeBlocker" in managementTextData &&
                managementTextData.activeBlocker.articles.map(
                  (article, index) => (
                    <div key={`article-${index}`} className="article">
                      <img className="icon" src={article.image} alt="robbery" />
                      <p>{article.article}</p>
                    </div>
                  )
                )}
            </div>
          </div>
          <div className="off">
            <img src={images.buttonOFF} alt="buttonOFF" />
            {"inactiveBlocker" in managementTextData && (
              <p>{managementTextData.inactiveBlocker.title}</p>
            )}
            <div className="offGrid">
              {"inactiveBlocker" in managementTextData &&
                managementTextData.inactiveBlocker.articles.map(
                  (article, index) => (
                    <div key={`article-${index}`} className="article">
                      {/* <img src={images.robbery} alt="robbery" /> */}
                      <p>{article.article}</p>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
          <div className="imageContiner">
            <img className="image" src={images.vectorCar} alt="vectorCar" />
          </div>
      </div>
    </section>
  );
}

export default Managment;
