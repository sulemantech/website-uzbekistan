import React from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  prop,
  wIEUNTERSTTZENWIR,
  dIEAUTOMOBILINDUSTRIE,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-[1.75rem] text-left text-[3.438rem] text-giga-fiber-lila  ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[0.75rem]">
        <div className="relative leading-[125%] font-medium">{prop}</div>
        <div className="w-[0.188rem] relative border-giga-fiber-lila border-r-[3px] border-solid box-border h-[4.375rem]" />
      </div>
      <b className="w-[32.375rem] relative text-[1.875rem] leading-[125%] inline-block shrink-0">
        <p className="m-0">{wIEUNTERSTTZENWIR}</p>
        <p className="m-0">{dIEAUTOMOBILINDUSTRIE}</p>
      </b>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  wIEUNTERSTTZENWIR: PropTypes.string,
  dIEAUTOMOBILINDUSTRIE: PropTypes.string,
};

export default FrameComponent;
