import React from "react";

import { ButtonProps } from "../lib/interfaces";

function Button({ children, link }: ButtonProps) {
  return (
    <a href={link}>
      <button className={`button accent`}>{children}</button>
    </a>
  );
}

export default Button;
