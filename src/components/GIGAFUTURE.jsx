import { useMemo } from "react";
import PropTypes from "prop-types";

const GIGAFUTURE = ({
  className = "",
  rectangle2,
  gIGAFUTUREWidth,
  gIGAFUTUREHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivGap,
  divFontSize,
  frameDivGap1,
  wIEFRDERNWIRContainerFontSize,
  frameDivHeight,
  frameDivGap2,
  gIGAFUTUREFontSize,
  objectsIconWidth,
  objectsIconHeight,
}) => {
  const gIGAFUTUREStyle = useMemo(() => {
    return {
      width: gIGAFUTUREWidth,
      height: gIGAFUTUREHeight,
    };
  }, [gIGAFUTUREWidth, gIGAFUTUREHeight]);

  const frameDiv9Style = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      gap: frameDivGap,
    };
  }, [frameDivTop, frameDivLeft, frameDivWidth, frameDivGap]);

  const div2Style = useMemo(() => {
    return {
      fontSize: divFontSize,
    };
  }, [divFontSize]);

  const frameDiv10Style = useMemo(() => {
    return {
      gap: frameDivGap1,
    };
  }, [frameDivGap1]);

  const wIEFRDERNWIRContainerStyle = useMemo(() => {
    return {
      fontSize: wIEFRDERNWIRContainerFontSize,
    };
  }, [wIEFRDERNWIRContainerFontSize]);

  const frameDiv11Style = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const frameDiv12Style = useMemo(() => {
    return {
      gap: frameDivGap2,
    };
  }, [frameDivGap2]);

  const gIGAFUTURE1Style = useMemo(() => {
    return {
      fontSize: gIGAFUTUREFontSize,
    };
  }, [gIGAFUTUREFontSize]);

  const objectsIcon2Style = useMemo(() => {
    return {
      width: objectsIconWidth,
      height: objectsIconHeight,
    };
  }, [objectsIconWidth, objectsIconHeight]);

  return (
    <div
      className={`w-[445px] relative max-w-full h-[582px] text-left text-36xl text-white font-saira-condensed ${className}`}
      style={gIGAFUTUREStyle}
    >
      <img
        className="absolute h-full w-[99.89%] top-[0%] right-[0.11%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle2}
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#3b2a89)]" />
      <div
        className="absolute top-[74px] left-[40px] w-[380px] flex flex-col items-start justify-start gap-[235px]"
        style={frameDiv9Style}
      >
        <div
          className="self-stretch relative leading-[125%] font-medium"
          style={div2Style}
        >
          03
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[15px] text-11xl"
          style={frameDiv10Style}
        >
          <b
            className="self-stretch relative leading-[125%]"
            style={wIEFRDERNWIRContainerStyle}
          >
            <p className="m-0">{`WIE FÖRDERN WIR WACHSTUM `}</p>
            <p className="m-0">UND DIGITALE INTEGRATION?​</p>
          </b>
          <div
            className="h-[38px] flex flex-row items-center justify-start text-31xl text-giga-fiber-lila"
            style={frameDiv11Style}
          >
            <div
              className="flex flex-row items-center justify-start gap-[101px]"
              style={frameDiv12Style}
            >
              <b className="relative leading-[125%]" style={gIGAFUTURE1Style}>
                GIGA FUTURE
              </b>
              <img
                className="w-[38px] relative h-[34px] overflow-hidden shrink-0"
                alt=""
                src="/objects1.svg"
                style={objectsIcon2Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GIGAFUTURE.propTypes = {
  className: PropTypes.string,
  rectangle2: PropTypes.string,

  /** Style props */
  gIGAFUTUREWidth: PropTypes.any,
  gIGAFUTUREHeight: PropTypes.any,
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivGap: PropTypes.any,
  divFontSize: PropTypes.any,
  frameDivGap1: PropTypes.any,
  wIEFRDERNWIRContainerFontSize: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivGap2: PropTypes.any,
  gIGAFUTUREFontSize: PropTypes.any,
  objectsIconWidth: PropTypes.any,
  objectsIconHeight: PropTypes.any,
};

export default GIGAFUTURE;
