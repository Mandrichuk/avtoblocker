import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderProps } from "../lib/interfaces";
import { headerText } from "../constants";
import { sosialsText } from "../constants";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";
import { useWindowWidth } from "../utils/useWindowWidth";

import Button from "./Button";

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
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
                <Link to={""}>Link</Link>
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
                  <Link to={""}>Link</Link>
                  <Link to={""}>Link</Link>
                  <Link to={""}>Link</Link>
                  <Link to={""}>Link</Link>
                  <Link to={""}>Link</Link>
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
          <Button>{headerTextData.button.name}</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
