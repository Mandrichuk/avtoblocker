import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <a href={`#${navigationsText.header.id}`}>
        {navigationsText.header.include && navigationsText.header[lang]?.name}
      </a>
      <a href={`#${navigationsText.about.id}`}>
        {navigationsText.about.include && navigationsText.about[lang]?.name}
      </a>
      <a href={`#${navigationsText.advantages.id}`}>
        {navigationsText.advantages.include &&
          navigationsText.advantages[lang]?.name}
      </a>
      <a href={`#${navigationsText.catalog.id}`}>
        {navigationsText.catalog.include && navigationsText.catalog[lang]?.name}
      </a>
      <a href={`#${navigationsText.managment.id}`}>
        {navigationsText.managment.include &&
          navigationsText.managment[lang]?.name}
      </a>
      <a href={`#${navigationsText.howItWorks.id}`}>
        {navigationsText.howItWorks.include &&
          navigationsText.howItWorks[lang]?.name}
      </a>
      <a href={`#${navigationsText.benefits.id}`}>
        {navigationsText.benefits.include &&
          navigationsText.benefits[lang]?.name}
      </a>
      <a href={`#${navigationsText.order.id}`}>
        {navigationsText.order.include && navigationsText.order[lang]?.name}
      </a>
      <a href={`#${navigationsText.footer.id}`}>
        {navigationsText.footer.include && navigationsText.footer[lang]?.name}
      </a>
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
        {/* <img src="" alt="" /> */}
        <p className={`logo ${open && "open"}`}>Logo</p>
        {windowWidth > 1250 ? (
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

      <div className="header-content">
        <h1 className="title">{headerTextData.title}</h1>
        <p className="subtitle">{toUpperCase(headerTextData.subtitle)}</p>
        <p className="article">{headerTextData.article}</p>
        <div>
          <Button link={`#${navigationsText.order.id}`} >{headerTextData.button.name}</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
