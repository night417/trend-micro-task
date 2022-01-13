import React, { useState } from "react";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { ReturnButton } from "../Components/ReturnButton";
import { staticText } from "../util/staticText";

export const SignUp = () => {
  const { sign_up } = staticText;

  return (
    <div id="sign-up">
      <div className="sign-up__background">
        <div className="sign-up__content-box">
          <ReturnButton
            className="sign-up__return-btn"
            text={sign_up.back}
            path="/"
          />
          <div className="sign-up__content">
            <h3 className="subtitle">{sign_up.sub_title}</h3>
            <h2 className="title sign-up__title">{sign_up.title}</h2>
            <div className="sign-up__btns-box">
              <Button
                className="sign-up__btns"
                type="google"
                onClick={() => {}}
              />
              <Button
                className="sign-up__btns"
                type="facebook"
                onClick={() => {}}
              />
            </div>
            <div className="sign-up__separator">
              <hr />
              <span>{sign_up.separator}</span>
            </div>
            <div className="sign-up__inputs-box">
              <Input className="sign-up__inputs" name="First Name" />
              <Input className="sign-up__inputs" name="Last Name" />
            </div>
            <Input name="E-mail" type="email" />
            <Input name="Password" type="password" />

            <Button text={sign_up.btn_create} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};
