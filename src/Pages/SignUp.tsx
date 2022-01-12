import React, { useState } from "react";
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
        </div>
      </div>
    </div>
  );
};
