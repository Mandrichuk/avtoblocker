import React, { useState, useEffect } from "react";

import { InputProps } from "../lib/interfaces";

function Input({ type, placeholder, field, getValue }: InputProps) {
  const [text, setText] = useState("");

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  useEffect(() => {
    getValue(field, text);
  }, [text]);

  return <input onChange={changeText} type={type} placeholder={placeholder} />;
}

export default Input;
