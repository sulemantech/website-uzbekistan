import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  buttonPosition,
  buttonPadding,
  buttonGap,
  buttonWidth,
  mEHRERFAHRENFontSize,
  objectsIconWidth,
  objectsIconHeight,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      position: buttonPosition,
      padding: buttonPadding,
      gap: buttonGap,
      width: buttonWidth,
    };
  }, [buttonPosition, buttonPadding, buttonGap, buttonWidth]);

  const mEHRERFAHRENStyle = useMemo(() => {
    return {
      fontSize: mEHRERFAHRENFontSize,
    };
  }, [mEHRERFAHRENFontSize]);

  const objectsIcon3Style = useMemo(() => {
    return {
      width: objectsIconWidth,
      height: objectsIconHeight,
    };
  }, [objectsIconWidth, objectsIconHeight]);

  return (
    <div
      className={`relative flex flex-row items-center justify-start py-0 px-[5px] gap-4 text-left text-11xl text-white font-saira-condensed ${className}`}
      style={buttonStyle}
    >
      <div
        className="relative leading-[125%] font-semibold"
        style={mEHRERFAHRENStyle}
      >
        MEHR ERFAHREN
      </div>
      <img
        className="w-[29px] relative h-[26px] overflow-hidden shrink-0"
        alt=""
        src="/objects.svg"
        style={objectsIcon3Style}
      />
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,

  /** Style props */
  buttonPosition: PropTypes.any,
  buttonPadding: PropTypes.any,
  buttonGap: PropTypes.any,
  buttonWidth: PropTypes.any,
  mEHRERFAHRENFontSize: PropTypes.any,
  objectsIconWidth: PropTypes.any,
  objectsIconHeight: PropTypes.any,
};

export default Button;
