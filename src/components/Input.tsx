import React, { useState, useEffect } from "react";

import { InputProps } from "../lib/interfaces";

import { inputAlertText } from "../constants";

function Input({
  type,
  placeholder,
  field,
  lang,
  error,
  devastation,
  getValue,
}: InputProps) {
  const inputAlertTextData = inputAlertText[lang] || inputAlertText["en"];
  const [text, setText] = useState("");

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  useEffect(() => {
    getValue(field, text);
  }, [text]);

  useEffect(() => {
    if (devastation) setText("");
  console.log(text);
  }, [devastation]);


  return (
    <section className="inputSection">
      <input onChange={changeText} type={type} placeholder={placeholder} />
      {error && <label>{inputAlertTextData.alert}</label>}
    </section>
  );
}

export default Input;
