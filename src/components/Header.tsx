import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderProps } from "../lib/interfaces";
import { headerText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";
import { useWindowWidth } from "../utils/useWindowWidth";

import Button from "./Button";

function Header({ changeLang, lang }: HeaderProps) {
  const headerTextData = headerText[lang] || headerText["en"];
  const windowWidth = useWindowWidth();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header>
      <nav>
        {/* <img src="" alt="" /> */}
        <p className="logo">Logo</p>
        {windowWidth > 1200 ? (
          <>
            <div className="nav-block">
              <ul>
                <p className="phone">+380000000000</p>
                <Link to={""}>Home</Link>
                <Link to={""}>Home</Link>
                <Link to={""}>Home</Link>
                <Link to={""}>Home</Link>
                <Link to={""}>Home</Link>
              </ul>
            </div>
            <div className="languages">
              <p className="active">ru</p>
              <p className="">en</p>
            </div>
          </>
        ) : (
          <div
            onClick={() => setOpen(!open)}
            className={`burger-menu ${open && "open"}`}
          ></div>
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
