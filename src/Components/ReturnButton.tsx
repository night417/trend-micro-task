import React from "react";
// import { useNavigate } from "react-router-dom";

export const ReturnButton = ({
  text,
  path,
  className,
}: {
  text: string;
  path: string;
  className?: string;
}) => {
  // let navigate = useNavigate();
  return (
    <a className={`return-button ${className}`} onClick={() => {}}>
      ←<span className="return-button__text">{text}</span>
    </a>
  );
};
