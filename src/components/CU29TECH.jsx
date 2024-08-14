import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const CU29TECH = ({
  className = "",
  rectangle2,
  cU29TECHWidth,
  cU29TECHHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivGap,
  divFontSize,
  frameDivGap1,
  wIESTEIGERNWIRContainerFontSize,
  frameDivHeight,
  frameDivGap2,
  cU29TECHFontSize,
  objectsIconWidth,
  objectsIconHeight,
}) => {
  const cU29TECHStyle = useMemo(() => {
    return {
      width: cU29TECHWidth,
      height: cU29TECHHeight,
    };
  }, [cU29TECHWidth, cU29TECHHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      gap: frameDivGap,
    };
  }, [frameDivTop, frameDivLeft, frameDivWidth, frameDivGap]);

  const divStyle = useMemo(() => {
    return {
      fontSize: divFontSize,
    };
  }, [divFontSize]);

  const frameDiv2Style = useMemo(() => {
    return {
      gap: frameDivGap1,
    };
  }, [frameDivGap1]);

  const wIESTEIGERNWIRContainerStyle = useMemo(() => {
    return {
      fontSize: wIESTEIGERNWIRContainerFontSize,
    };
  }, [wIESTEIGERNWIRContainerFontSize]);

  const frameDiv3Style = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const frameDiv4Style = useMemo(() => {
    return {
      gap: frameDivGap2,
    };
  }, [frameDivGap2]);

  const cU29TECH1Style = useMemo(() => {
    return {
      fontSize: cU29TECHFontSize,
    };
  }, [cU29TECHFontSize]);

  const objectsIconStyle = useMemo(() => {
    return {
      width: objectsIconWidth,
      height: objectsIconHeight,
    };
  }, [objectsIconWidth, objectsIconHeight]);

  return (
    <div
      className={`w-[445px] relative max-w-full h-[582px] text-left text-36xl text-white font-saira-condensed ${className}`}
      style={cU29TECHStyle}
    >
      <img
        className="absolute h-full w-[99.89%] top-[0%] right-[0.11%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle2}
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#3b2a89)]" />
      <div
        className="absolute top-[74px] left-[40px] w-[380px] flex flex-col items-start justify-start gap-[235px]"
        style={frameDiv1Style}
      >
        <div
          className="self-stretch relative leading-[125%] font-medium"
          style={divStyle}
        >
          01
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[15px] text-11xl"
          style={frameDiv2Style}
        >
          <b
            className="self-stretch relative leading-[125%]"
            style={wIESTEIGERNWIRContainerStyle}
          >
            <p className="m-0">WIE STEIGERN ​WIR DIE REGIONALE </p>
            <p className="m-0">WIRTSCHAFTSKRAFT?​</p>
          </b>
          <div
            className="h-[38px] flex flex-row items-center justify-start text-31xl text-giga-fiber-lila"
            style={frameDiv3Style}
          >
            <div
              className="flex flex-row items-center justify-start gap-36"
              style={frameDiv4Style}
            >
              <b className="relative leading-[125%]" style={cU29TECH1Style}>
                CU29 TECH
              </b>
              <img
                className="w-[38px] relative h-[34px] overflow-hidden shrink-0"
                alt=""
                src="/objects1.svg"
                style={objectsIconStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CU29TECH.propTypes = {
  className: PropTypes.string,
  rectangle2: PropTypes.string,

  /** Style props */
  cU29TECHWidth: PropTypes.any,
  cU29TECHHeight: PropTypes.any,
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivGap: PropTypes.any,
  divFontSize: PropTypes.any,
  frameDivGap1: PropTypes.any,
  wIESTEIGERNWIRContainerFontSize: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivGap2: PropTypes.any,
  cU29TECHFontSize: PropTypes.any,
  objectsIconWidth: PropTypes.any,
  objectsIconHeight: PropTypes.any,
};

export default CU29TECH;
