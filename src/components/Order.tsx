import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Title from "./Title";

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
  const [activeError, setActiveError] = useState(false);
  const [devastation, setDevastation] = useState(false);
  const [form, setForm] = useState<OrderInputs>({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    carModel: "",
  });

  function getText(field: string, text: string) {
    setForm({
      ...form,
      [field]: text,
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      setLoading(true);

      emailjs
        .send(
          "service_67gp3xk",
          "template_2mjltnq",
          {
            from_name: form.name,
            to_name: "avtoblock.com",
            from_email: form.email,
            to_email: "andrew.mandrichuk2007@gmail.com",
            phone_number: form.phoneNumber,
            car_model: form.carModel,
          },
          "O_emiMG-zC22X_eF2"
        )
        .then(
          () => {
            setLoading(false);
            // TODO: Add localization
            alert("Thank you! We will contact you as soon as possible.");

            setDevastation(true);
            setForm({
              name: "",
              surname: "",
              phoneNumber: "",
              email: "",
              carModel: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);

            alert("Something went wrong.");
          }
        );
    }
  };

  function isFormValid(): boolean {
    if (
      form.name.length === 0 &&
      form.surname.length === 0 &&
      form.phoneNumber.length === 0 &&
      form.email.length === 0
    ) {
      setActiveError(true);
      return false;
    }
    return true;
  }

  return (
    <section className="orderSection" id={navigationsText.order.id}>
      <div className="imageContainer"></div>
        <Title>{toUpperCase(orderTextData.title)}</Title>
      <div className="form">
        <p className="article">{orderTextData.article}</p>
        <form>
          <div className="inputContainer">
            <div className="namesInputs">
              {"inputs" in orderTextData && (
                <Input
                  error={form.name.length === 0 && activeError}
                  lang={lang}
                  type={orderTextData.inputs.nameInput.type}
                  placeholder={orderTextData.inputs.nameInput.placeholder}
                  field={orderTextData.inputs.nameInput.field}
                  devastation={devastation}
                  getValue={getText}
                />
              )}
              {"inputs" in orderTextData && (
                <Input
                  error={form.surname.length === 0 && activeError}
                  lang={lang}
                  type={orderTextData.inputs.surnameInput.type}
                  placeholder={orderTextData.inputs.surnameInput.placeholder}
                  field={orderTextData.inputs.surnameInput.field}
                  devastation={devastation}
                  getValue={getText}
                />
              )}
            </div>
            {"inputs" in orderTextData && (
              <Input
                error={form.phoneNumber.length === 0 && activeError}
                lang={lang}
                type={orderTextData.inputs.phoneNumberInput.type}
                placeholder={orderTextData.inputs.phoneNumberInput.placeholder}
                field={orderTextData.inputs.phoneNumberInput.field}
                devastation={devastation}
                getValue={getText}
              />
            )}
            {"inputs" in orderTextData && (
              <Input
                error={form.email.length === 0 && activeError}
                lang={lang}
                type={orderTextData.inputs.emailInput.type}
                placeholder={orderTextData.inputs.emailInput.placeholder}
                field={orderTextData.inputs.emailInput.field}
                devastation={devastation}
                getValue={getText}
              />
            )}
            {"inputs" in orderTextData && (
              <Input
                error={form.email.length === 0 && activeError}
                lang={lang}
                type={orderTextData.inputs.carInput.type}
                placeholder={orderTextData.inputs.carInput.placeholder}
                field={orderTextData.inputs.carInput.field}
                devastation={devastation}
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
