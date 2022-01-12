import React from "react";
import { ReactComponent as Google } from "../Images/svg/icon_google.svg";
import { ReactComponent as Facebook } from "../Images/svg/icon_facebook.svg";
import { staticText } from "../util/staticText";

export const Button = ({
  type = "main",
  text,
  onClick,
  className,
}: {
  type?: "google" | "facebook" | "main";
  text?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}) => {
  const { button } = staticText;
  return (
    <div
      className={`button ${
        type === "google" || type === "facebook" ? "button--sub" : ""
      } ${className}`}
      onClick={onClick}
    >
      {(type === "google" || type === "facebook") && (
        <div className="button__icon">
          {type === "google" && <Google />}
          {type === "facebook" && <Facebook />}
        </div>
      )}
      <div className="button__text">
        {type === "google" && button.google}
        {type === "facebook" && button.facebook}
        {type !== "google" && type !== "facebook" && text}
      </div>
    </div>
  );
};
