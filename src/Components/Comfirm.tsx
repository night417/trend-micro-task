import React from "react";
import { ReactComponent as TickFalse } from "../Images/svg/tickbox_false.svg";
import { ReactComponent as TickTrue } from "../Images/svg/tickbox_true.svg";
import { ReactComponent as Tick } from "../Images/svg/tickbox_tick.svg";

export const Comfirm = ({
  text,
  className,
  isChecked,
  setIsChecked,
}: {
  text: string;
  className?: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`comfirm ${className}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div className="comfirm__tick-box">
        {isChecked ? (
          <>
            <TickTrue />
            <Tick className="comfirm__tick" />
          </>
        ) : (
          <TickFalse />
        )}
      </div>
      <p className="comfirm__text">{text}</p>
    </div>
  );
};
