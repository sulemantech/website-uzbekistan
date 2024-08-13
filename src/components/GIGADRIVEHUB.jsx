import { useMemo } from "react";
import PropTypes from "prop-types";

const GIGADRIVEHUB = ({
  className = "",
  rectangle2,
  gIGADRIVEHUBWidth,
  gIGADRIVEHUBHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivGap,
  divFontSize,
  frameDivGap1,
  wIEUNTERSTTZENWIRFontSize,
  frameDivHeight,
  frameDivGap2,
  gIGADRIVEHUBFontSize,
  objectsIconWidth,
  objectsIconHeight,
  onGIGADRIVEHUBClick,
}) => {
  const gIGADRIVEHUBStyle = useMemo(() => {
    return {
      width: gIGADRIVEHUBWidth,
      height: gIGADRIVEHUBHeight,
    };
  }, [gIGADRIVEHUBWidth, gIGADRIVEHUBHeight]);

  const frameDiv5Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      gap: frameDivGap,
    };
  }, [frameDivTop, frameDivLeft, frameDivWidth, frameDivGap]);

  const div1Style = useMemo(() => {
    return {
      fontSize: divFontSize,
    };
  }, [divFontSize]);

  const frameDiv6Style = useMemo(() => {
    return {
      gap: frameDivGap1,
    };
  }, [frameDivGap1]);

  const wIEUNTERSTTZENWIRStyle = useMemo(() => {
    return {
      fontSize: wIEUNTERSTTZENWIRFontSize,
    };
  }, [wIEUNTERSTTZENWIRFontSize]);

  const frameDiv7Style = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const frameDiv8Style = useMemo(() => {
    return {
      gap: frameDivGap2,
    };
  }, [frameDivGap2]);

  const gIGADRIVEHUB1Style = useMemo(() => {
    return {
      fontSize: gIGADRIVEHUBFontSize,
    };
  }, [gIGADRIVEHUBFontSize]);

  const objectsIcon1Style = useMemo(() => {
    return {
      width: objectsIconWidth,
      height: objectsIconHeight,
    };
  }, [objectsIconWidth, objectsIconHeight]);

  return (
    <div
      className={`w-[445px] relative max-w-full h-[582px] text-left text-36xl text-white font-saira-condensed ${className}`}
      style={gIGADRIVEHUBStyle}
      onClick={onGIGADRIVEHUBClick}
    >
      <img
        className="absolute h-full w-[99.89%] top-[0%] right-[0.11%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle2}
      />
      <div className="absolute h-[94.16%] w-full top-[5.84%] right-[0%] bottom-[0%] left-[0%] rounded-sm [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#3b2a89)]" />
      <div
        className="absolute top-[74px] left-[40px] w-[380px] flex flex-col items-start justify-start gap-[235px]"
        style={frameDiv5Style}
      >
        <div
          className="self-stretch relative leading-[125%] font-medium"
          style={div1Style}
        >
          02
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[15px] text-11xl"
          style={frameDiv6Style}
        >
          <b
            className="self-stretch relative leading-[125%]"
            style={wIEUNTERSTTZENWIRStyle}
          >
            WIE UNTERSTÜTZEN WIR DIE AUTOMOBILINDUSTRIE?​
          </b>
          <div
            className="h-[38px] flex flex-row items-center justify-start text-31xl text-giga-fiber-lila"
            style={frameDiv7Style}
          >
            <div
              className="flex flex-row items-center justify-start gap-[45px]"
              style={frameDiv8Style}
            >
              <b className="relative leading-[125%]" style={gIGADRIVEHUB1Style}>
                GIGA DRIVE HUB
              </b>
              <img
                className="w-[38px] relative h-[34px] overflow-hidden shrink-0"
                alt=""
                src="/objects1.svg"
                style={objectsIcon1Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GIGADRIVEHUB.propTypes = {
  className: PropTypes.string,
  rectangle2: PropTypes.string,

  /** Style props */
  gIGADRIVEHUBWidth: PropTypes.any,
  gIGADRIVEHUBHeight: PropTypes.any,
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivGap: PropTypes.any,
  divFontSize: PropTypes.any,
  frameDivGap1: PropTypes.any,
  wIEUNTERSTTZENWIRFontSize: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivGap2: PropTypes.any,
  gIGADRIVEHUBFontSize: PropTypes.any,
  objectsIconWidth: PropTypes.any,
  objectsIconHeight: PropTypes.any,

  /** Action props */
  onGIGADRIVEHUBClick: PropTypes.func,
};

export default GIGADRIVEHUB;
