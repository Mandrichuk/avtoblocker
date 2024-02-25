import React from "react";

import { ButtonProps } from "../lib/interfaces";

import { toUpperCase } from "../utils/toUpperCase";

function Button({ children, link }: ButtonProps) {
  return (
    <a href={link}>
      <button className={`button accent`}>{toUpperCase(children)}</button>
    </a>
  );
}

export default Button;
