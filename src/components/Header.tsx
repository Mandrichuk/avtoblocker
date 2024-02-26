import React, { useState } from "react";
import { Link } from "react-router-dom";

import images from "../constants";

import { HeaderProps } from "../lib/interfaces";
import { headerText } from "../constants";
import { sosialsText } from "../constants";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";
import { useWindowWidth } from "../utils/useWindowWidth";

import Button from "./Button";

function Nav({ lang }: HeaderProps) {
  return (
    <>
      {navigationsText.header.include && (
        <a href={`#${navigationsText.header.id}`}>
          {navigationsText.header[lang]?.name}
        </a>
      )}
      {navigationsText.about.include && (
        <a href={`#${navigationsText.about.id}`}>
          {navigationsText.about[lang]?.name}
        </a>
      )}

      {navigationsText.benefits.include && (
        <a href={`#${navigationsText.benefits.id}`}>
          {navigationsText.benefits[lang]?.name}
        </a>
      )}

      {navigationsText.catalog.include && (
        <a href={`#${navigationsText.catalog.id}`}>
          {navigationsText.catalog[lang]?.name}
        </a>
      )}

      {navigationsText.howItWorks.include && (
        <a href={`#${navigationsText.howItWorks.id}`}>
          {navigationsText.howItWorks[lang]?.name}
        </a>
      )}
      {navigationsText.managment.include && (
        <a href={`#${navigationsText.managment.id}`}>
          {navigationsText.managment[lang]?.name}
        </a>
      )}

      {navigationsText.advantages.include && (
        <a href={`#${navigationsText.advantages.id}`}>
          {navigationsText.advantages[lang]?.name}
        </a>
      )}
      {navigationsText.order.include && (
        <a href={`#${navigationsText.order.id}`}>
          {navigationsText.order[lang]?.name}
        </a>
      )}

      {navigationsText.footer.include && (
        <a href={`#${navigationsText.footer.id}`}>
          {navigationsText.footer[lang]?.name}
        </a>
      )}
    </>
  );
}

function Header({ changeLang, lang }: HeaderProps) {
  const headerTextData = headerText[lang] || headerText["en"];
  const windowWidth = useWindowWidth();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header id={navigationsText.header.id}>
      <nav>
        <div className={`logo ${open && "open"}`}>
          <img src={images.logo} alt="logo" />
        </div>
        {windowWidth > 1024 ? (
          <>
            <div className="nav-block">
              <ul>
                <p className="phone">+380000000000</p>

                <Nav lang={lang || "en"} changeLang={changeLang} />
              </ul>
            </div>
            <div className="languages">
              <p
                onClick={() => changeLang("ru")}
                className={lang === "ru" ? "active" : ""}
              >
                ru
              </p>
              <p
                onClick={() => changeLang("en")}
                className={lang === "en" ? "active" : ""}
              >
                en
              </p>
              <p
                onClick={() => changeLang("sk")}
                className={lang === "sk" ? "active" : ""}
              >
                sk
              </p>
            </div>
          </>
        ) : (
          <div className="burger-menu-container">
            <div onClick={() => setOpen(!open)} className="burger-menu-wrapper">
              <div className={`burger-menu ${open && "open"}`} />
              <div className={`screen-nav-block ${open && "open"}`}>
                <ul>
                  <Nav lang={lang || "en"} changeLang={changeLang} />
                </ul>
                <div className="contactData">
                  <p className="phone">+380000000000</p>
                  <div className="sosials">
                    {sosialsText.map((sosial, index) => (
                      <a
                        href={sosial.path}
                        target="_blank"
                        key={`sosials-${index}`}
                      >
                        {React.createElement(sosial.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="header-content-wrapper">
        <div className="header-content">
          <p className="subtitle">{toUpperCase(headerTextData.subtitle)}</p>
          <h1 className="title">{headerTextData.title}</h1>
          <p className="article">{headerTextData.article}</p>
          <div>
            <Button link={`#${navigationsText.order.id}`}>
              {(headerTextData.button.name)}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
