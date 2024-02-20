import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Input from "./Input";
import Button from "./Button";

import { OrderProps } from "../lib/interfaces";
import { OrderInputs } from "../lib/types";

import { orderText } from "../constants/index";
import { navigationsText } from "../constants";

import { toUpperCase } from "../utils/toUpperCase";

function Order({ lang }: OrderProps) {
  const orderTextData = orderText[lang] || orderText["en"];
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<OrderInputs>({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
  });

  function getText(field: string, text: string) {
    setForm({
      ...form,
      [field]: text,
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_67gp3xk",
        "template_2mjltnq",
        {
          from_name: form.name,
          to_name: "Andrew Mandrichuk",
          from_email: form.email,
          to_email: "andrew.mandrichuk2007@gmail.com",
          phone_number: form.phoneNumber,
        },
        "O_emiMG-zC22X_eF2"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            surname: "",
            phoneNumber: "",
            email: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

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
          <div className="buttonSubmit" onClick={handleSubmit}>
            <Button link="">{orderTextData.button.name}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Order;
