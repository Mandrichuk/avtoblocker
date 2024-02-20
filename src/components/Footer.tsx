import React from "react";

import { FooterProps } from "../lib/interfaces";
import { footerText } from "../constants/index";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";

function Footer({ lang }: FooterProps) {
  const footerTextData = footerText[lang] || footerText["en"];

  return (
    <footer id={navigationsText.footer.id}>
      <div className="details">
        <div className="data">
          <div className="title">{footerTextData.title}</div>
          <div className="personalData">
            {"details" in footerTextData &&
              footerTextData.details.map((detail, index) => (
                <p key={`detail-${index}`}>{detail.detail}</p>
              ))}
          </div>
        </div>
        <div className="contacts">
          {"sosialsText" in footerTextData && (
            <div className="title">{footerTextData.sosialsText}</div>
          )}
          <div className="sosials">
          {"sosials" in footerTextData &&
            footerTextData.sosials.map((sosial, index) => (
              <a href={sosial.path} target="_blank" key={`sosials-${index}`}>{React.createElement(sosial.icon)}</a>
            ))}
        </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
