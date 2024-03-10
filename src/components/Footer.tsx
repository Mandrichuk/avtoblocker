import React from "react";

import { FooterProps } from "../lib/interfaces";
import { footerText } from "../constants/index";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";

function Footer({ lang }: FooterProps) {
  const footerTextData = footerText[lang] || footerText["en"];
  console.log(footerTextData.createdByText);
  return (
    <footer id={navigationsText.footer.id}>
      <div className="details">
        <div className="data">
          <div className="title">{footerTextData.title}</div>
          <div className="personalData">
            {"details" in footerTextData &&
              footerTextData.details.map((detail, index) => (
                <div key={`detail-${index}`} className="detail">
                  <div className="icon">
                    <img src={detail.image} alt="icon" />
                  </div>
                  <div className="text">
                    <p>{detail.firstDetailLine}</p>
                    <p>{detail.secondDetailLine}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="contacts">
          {"sosialsText" in footerTextData && (
            <div className="title">
              {toUpperCase(footerTextData.sosialsText)}
            </div>
          )}
          <div className="sosials">
            {"sosials" in footerTextData &&
              footerTextData.sosials.map((sosial, index) => (
                <a href={sosial.path} target="_blank" key={`sosials-${index}`}>
                  {React.createElement(sosial.icon)}
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="creatorSection">
        <p className="createdByText">{footerTextData.createdByText} &nbsp;</p>

        <a href={footerTextData.companyLink} target="_blank" className="createdByCompany">{footerTextData.createdByCompany}</a>
      </div>
    </footer>
  );
}

export default Footer;
