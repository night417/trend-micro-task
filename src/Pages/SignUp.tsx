import React, { useState } from "react";
import { ReturnButton } from "../Components/ReturnButton";

export const SignUp = () => {
  return (
    <div id="sign-up">
      <div className="sign-up__background">
        <div className="sign-up__content-box">
          <ReturnButton className="sign-up__return-btn" text="Back" path="/" />
        </div>
      </div>
    </div>
  );
};
