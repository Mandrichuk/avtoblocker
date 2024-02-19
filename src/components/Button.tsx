import React from "react";

import { ButtonProps } from "../lib/interfaces";

function Button({ children }: ButtonProps) {
  return <button className={`button accent`}>{children}</button>;
}

export default Button;
