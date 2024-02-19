import React from "react";

import { OrderProps } from "../lib/interfaces";
import { orderText } from "../constants/index";

import { toUpperCase } from "../utils/toUpperCase";

function Order({ lang }: OrderProps) {
  const orderTextData = orderText[lang] || orderText["en"];

  return (
    <section className="orderSection">
      <div className="imageContainer"></div>
      <div className="form">
        <h1 className="title">{toUpperCase(orderTextData.title)}</h1>
        <p className="article">{orderTextData.article}</p>
        <form>
          <div className="inputContainer">
            <div className="namesInputs">
              {"inputs" in orderTextData && (
                <input
                  type="text"
                  placeholder={orderTextData.inputs.nameInput.placeholder}
                />
              )}
              {"inputs" in orderTextData && (
                <input
                  type="text"
                  placeholder={orderTextData.inputs.surnameInput.placeholder}
                />
              )}
            </div>
            {"inputs" in orderTextData && (
              <input
                type="text"
                placeholder={orderTextData.inputs.phoneNumberInput.placeholder}
              />
            )}
            {"inputs" in orderTextData && (
              <input
                type="text"
                placeholder={orderTextData.inputs.emailInput.placeholder}
              />
            )}
          </div>
          <div className="buttonSubmit">
            <button className="button accent" type="submit">{orderTextData.button.name}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Order;
