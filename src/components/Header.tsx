import React from "react";

import { HeaderProps } from "../lib/interfaces";
import { headerText } from "../constants";

function Header({ changeLang, lang }: HeaderProps) {
  const headerTextData = headerText[lang];

  return <div>Header</div>;
}

export default Header;
