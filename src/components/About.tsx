import React from "react";

import { AboutProps } from "../lib/interfaces";
import { aboutText } from "../constants";

function About({ lang }: AboutProps) {
  const aboutTextData = aboutText[lang];

  return <div>About</div>;
}

export default About;
