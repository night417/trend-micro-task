import React, { useState } from "react";
import { ReactComponent as Eye } from "../Images/svg/icon_eye.svg";
import { ReactComponent as Check } from "../Images/svg/icon_check.svg";
import { staticText } from "../util/staticText";

export const Input = ({
  name,
  type = "text",
  className,
}: {
  name: string;
  type?: "text" | "email" | "password";
  className?: string;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isLength8, setIsLength8] = useState(false);
  const [isNumber1, setIsNumber1] = useState(false);

  const { input } = staticText;

  return (
    <div
      className={`input ${type === "password" ? "password" : ""} ${
        className ? className : ""
      }`}
    >
      <input
        className={`input__input-area ${isFocus ? "focus" : ""} ${
          type === "password" ? "password" : ""
        }`}
        onChange={(e) => {
          e.target.value ? setIsFocus(true) : setIsFocus(false);
          if (type === "password") {
            setPassword(e.target.value);
            e.target.value.length >= 8
              ? setIsLength8(true)
              : setIsLength8(false);
            const regex = new RegExp("[0-9]");
            regex.test(e.target.value)
              ? setIsNumber1(true)
              : setIsNumber1(false);
          }
        }}
        type={type === "password" ? "password" : "text"}
      />
      <span className="input__name">{name}</span>
      {type === "password" && isVisible && (
        <span className="input__password-text">{password}</span>
      )}
      {type === "password" && (
        <>
          <Eye
            className={`input__password-eye ${
              isVisible ? "input__password-eye--show" : ""
            }`}
            onClick={() => setIsVisible(!isVisible)}
          />
          <div className="input__check">
            <span
              className={`input__check-text ${
                isLength8 ? "input__check-text--pass" : ""
              }`}
            >
              <Check
                className={`input__check-icon ${
                  isLength8 ? "input__check-text--pass" : ""
                }`}
              />
              {input.password.length}
            </span>
            <span
              className={`input__check-text ${
                isNumber1 ? "input__check-text--pass" : ""
              }`}
            >
              <Check
                className={`input__check-icon ${
                  isNumber1 ? "input__check-text--pass" : ""
                }`}
              />
              {input.password.pattern}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
