import React from "react";
// import { Link as LinkTo } from "react-router-dom";

export const Link = ({ text, to }: { text: string; to: string }) => {
  return (
    // <LinkTo to={to} className="link">
    <a className="link">{text}</a>
    // </LinkTo>
  );
};
