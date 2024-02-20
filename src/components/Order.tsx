import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";

import { OrderProps } from "../lib/interfaces";
import { OrderInputs } from "../lib/types";

import { orderText } from "../constants/index";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";

function Order({ lang }: OrderProps) {
  const orderTextData = orderText[lang] || orderText["en"];
  const [orderInputs, setOrderInputs] = useState<OrderInputs>({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
  });

  function getText(field: string, text: string) {
    setOrderInputs({
      ...orderInputs,
      [field]: text,
    });
  }

  return (
    <section className="orderSection" id={navigationsText.order.id}>
      <div className="imageContainer"></div>
      <div className="form">
        <h1 className="title">{toUpperCase(orderTextData.title)}</h1>
        <p className="article">{orderTextData.article}</p>
        <form>
          <div className="inputContainer">
            <div className="namesInputs">
              {"inputs" in orderTextData && (
                <Input
                  type={orderTextData.inputs.nameInput.type}
                  placeholder={orderTextData.inputs.nameInput.placeholder}
                  field={orderTextData.inputs.nameInput.field}
                  getValue={getText}
                />
              )}
              {"inputs" in orderTextData && (
                <Input
                  type={orderTextData.inputs.surnameInput.type}
                  placeholder={orderTextData.inputs.surnameInput.placeholder}
                  field={orderTextData.inputs.surnameInput.field}
                  getValue={getText}
                />
              )}
            </div>
            {"inputs" in orderTextData && (
              <Input
                type={orderTextData.inputs.phoneNumberInput.type}
                placeholder={orderTextData.inputs.phoneNumberInput.placeholder}
                field={orderTextData.inputs.phoneNumberInput.field}
                getValue={getText}
              />
            )}
            {"inputs" in orderTextData && (
              <Input
                type={orderTextData.inputs.emailInput.type}
                placeholder={orderTextData.inputs.emailInput.placeholder}
                field={orderTextData.inputs.emailInput.field}
                getValue={getText}
              />
            )}
          </div>
          <div className="buttonSubmit">
            <Button link="">{orderTextData.button.name}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Order;
