import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const ZieleDerKooperationMitGigaFiber = ({
  className = "",
  zieleDerKooperationMitGigaWidth,
  zieleDerKooperationMitGigaHeight,
  zIELEDERKOOPERATIONFontSize,
}) => {
  const zieleDerKooperationMitGigaStyle = useMemo(() => {
    return {
      width: zieleDerKooperationMitGigaWidth,
      height: zieleDerKooperationMitGigaHeight,
    };
  }, [zieleDerKooperationMitGigaWidth, zieleDerKooperationMitGigaHeight]);

  const zIELEDERKOOPERATIONStyle = useMemo(() => {
    return {
      fontSize: zIELEDERKOOPERATIONFontSize,
    };
  }, [zIELEDERKOOPERATIONFontSize]);

  return (
    <div
      className={`w-[1276px] relative max-w-full h-[92px] text-left text-11xl text-white font-saira-condensed ${className}`}
      style={zieleDerKooperationMitGigaStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-blueviolet" />
      <b
        className="absolute top-[30.43%] left-[2.35%] leading-[125%]"
        style={zIELEDERKOOPERATIONStyle}
      >
        ZIELE DER KOOPERATION MIT GIGA FIBER
      </b>
      <img
        className="absolute h-[41.3%] w-[3.29%] top-[29.35%] right-[2.43%] bottom-[29.35%] left-[94.28%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/objects2.svg"
      />
    </div>
  );
};

ZieleDerKooperationMitGigaFiber.propTypes = {
  className: PropTypes.string,

  /** Style props */
  zieleDerKooperationMitGigaWidth: PropTypes.any,
  zieleDerKooperationMitGigaHeight: PropTypes.any,
  zIELEDERKOOPERATIONFontSize: PropTypes.any,
};

export default ZieleDerKooperationMitGigaFiber;
