import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Default = ({
  className = "",
  property1DefaultWidth,
  property1DefaultPosition,
  property1DefaultGap,
  pOTENZIALFRDIEFontSize,
  frameDivWidth,
  frameDivGap,
  groupDivHeight,
  investitionenInDokumentationTop,
  investitionenInDokumentationLeft,
  investitionenInDokumentationFontSize,
  investitionenInDokumentationWidth,
  groupDivTop,
  groupDivLeft,
  groupDivWidth,
  groupDivHeight1,
  lineIconTop,
  lineIconLeft,
  lineIconWidth,
  subtractIconWidth,
  subtractIconHeight,
  groupDivHeight2,
  wirtschaftlicheAuswirkungenTop,
  wirtschaftlicheAuswirkungenLeft,
  wirtschaftlicheAuswirkungenFontSize,
  wirtschaftlicheAuswirkungenWidth,
  groupDivTop1,
  groupDivLeft1,
  groupDivWidth1,
  groupDivHeight3,
  lineIconTop1,
  lineIconLeft1,
  lineIconWidth1,
  subtractIconWidth1,
  subtractIconHeight1,
  groupDivHeight4,
  internationaleStandardsUndTop,
  internationaleStandardsUndLeft,
  internationaleStandardsUndFontSize,
  internationaleStandardsUndWidth,
  groupDivTop2,
  groupDivLeft2,
  groupDivWidth2,
  groupDivHeight5,
  lineIconTop2,
  lineIconLeft2,
  lineIconWidth2,
  subtractIconWidth2,
  subtractIconHeight2,
  groupDivHeight6,
  schaffungVonArbeitspltzenTop,
  schaffungVonArbeitspltzenLeft,
  schaffungVonArbeitspltzenFontSize,
  schaffungVonArbeitspltzenWidth,
  groupDivTop3,
  groupDivLeft3,
  groupDivWidth3,
  groupDivHeight7,
  groupDivTop4,
  groupDivLeft4,
  groupDivWidth4,
  groupDivHeight8,
  lineIconTop3,
  lineIconLeft3,
  lineIconWidth3,
  subtractIconWidth3,
  subtractIconHeight3,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      position: property1DefaultPosition,
      gap: property1DefaultGap,
    };
  }, [property1DefaultWidth, property1DefaultPosition, property1DefaultGap]);

  const pOTENZIALFRDIEStyle = useMemo(() => {
    return {
      fontSize: pOTENZIALFRDIEFontSize,
    };
  }, [pOTENZIALFRDIEFontSize]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      gap: frameDivGap,
    };
  }, [frameDivWidth, frameDivGap]);

  const groupDivStyle = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const investitionenInDokumentationStyle = useMemo(() => {
    return {
      top: investitionenInDokumentationTop,
      left: investitionenInDokumentationLeft,
      fontSize: investitionenInDokumentationFontSize,
      width: investitionenInDokumentationWidth,
    };
  }, [
    investitionenInDokumentationTop,
    investitionenInDokumentationLeft,
    investitionenInDokumentationFontSize,
    investitionenInDokumentationWidth,
  ]);

  const groupDiv1Style = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth,
      height: groupDivHeight1,
    };
  }, [groupDivTop, groupDivLeft, groupDivWidth, groupDivHeight1]);

  const lineIconStyle = useMemo(() => {
    return {
      top: lineIconTop,
      left: lineIconLeft,
      width: lineIconWidth,
    };
  }, [lineIconTop, lineIconLeft, lineIconWidth]);

  const subtractIconStyle = useMemo(() => {
    return {
      width: subtractIconWidth,
      height: subtractIconHeight,
    };
  }, [subtractIconWidth, subtractIconHeight]);

  const groupDiv2Style = useMemo(() => {
    return {
      height: groupDivHeight2,
    };
  }, [groupDivHeight2]);

  const wirtschaftlicheAuswirkungenUStyle = useMemo(() => {
    return {
      top: wirtschaftlicheAuswirkungenTop,
      left: wirtschaftlicheAuswirkungenLeft,
      fontSize: wirtschaftlicheAuswirkungenFontSize,
      width: wirtschaftlicheAuswirkungenWidth,
    };
  }, [
    wirtschaftlicheAuswirkungenTop,
    wirtschaftlicheAuswirkungenLeft,
    wirtschaftlicheAuswirkungenFontSize,
    wirtschaftlicheAuswirkungenWidth,
  ]);

  const groupDiv3Style = useMemo(() => {
    return {
      top: groupDivTop1,
      left: groupDivLeft1,
      width: groupDivWidth1,
      height: groupDivHeight3,
    };
  }, [groupDivTop1, groupDivLeft1, groupDivWidth1, groupDivHeight3]);

  const lineIcon1Style = useMemo(() => {
    return {
      top: lineIconTop1,
      left: lineIconLeft1,
      width: lineIconWidth1,
    };
  }, [lineIconTop1, lineIconLeft1, lineIconWidth1]);

  const subtractIcon1Style = useMemo(() => {
    return {
      width: subtractIconWidth1,
      height: subtractIconHeight1,
    };
  }, [subtractIconWidth1, subtractIconHeight1]);

  const groupDiv4Style = useMemo(() => {
    return {
      height: groupDivHeight4,
    };
  }, [groupDivHeight4]);

  const internationaleStandardsUndStyle = useMemo(() => {
    return {
      top: internationaleStandardsUndTop,
      left: internationaleStandardsUndLeft,
      fontSize: internationaleStandardsUndFontSize,
      width: internationaleStandardsUndWidth,
    };
  }, [
    internationaleStandardsUndTop,
    internationaleStandardsUndLeft,
    internationaleStandardsUndFontSize,
    internationaleStandardsUndWidth,
  ]);

  const groupDiv5Style = useMemo(() => {
    return {
      top: groupDivTop2,
      left: groupDivLeft2,
      width: groupDivWidth2,
      height: groupDivHeight5,
    };
  }, [groupDivTop2, groupDivLeft2, groupDivWidth2, groupDivHeight5]);

  const lineIcon2Style = useMemo(() => {
    return {
      top: lineIconTop2,
      left: lineIconLeft2,
      width: lineIconWidth2,
    };
  }, [lineIconTop2, lineIconLeft2, lineIconWidth2]);

  const subtractIcon2Style = useMemo(() => {
    return {
      width: subtractIconWidth2,
      height: subtractIconHeight2,
    };
  }, [subtractIconWidth2, subtractIconHeight2]);

  const groupDiv6Style = useMemo(() => {
    return {
      height: groupDivHeight6,
    };
  }, [groupDivHeight6]);

  const schaffungVonArbeitspltzenStyle = useMemo(() => {
    return {
      top: schaffungVonArbeitspltzenTop,
      left: schaffungVonArbeitspltzenLeft,
      fontSize: schaffungVonArbeitspltzenFontSize,
      width: schaffungVonArbeitspltzenWidth,
    };
  }, [
    schaffungVonArbeitspltzenTop,
    schaffungVonArbeitspltzenLeft,
    schaffungVonArbeitspltzenFontSize,
    schaffungVonArbeitspltzenWidth,
  ]);

  const groupDiv7Style = useMemo(() => {
    return {
      top: groupDivTop3,
      left: groupDivLeft3,
      width: groupDivWidth3,
      height: groupDivHeight7,
    };
  }, [groupDivTop3, groupDivLeft3, groupDivWidth3, groupDivHeight7]);

  const groupDiv8Style = useMemo(() => {
    return {
      top: groupDivTop4,
      left: groupDivLeft4,
      width: groupDivWidth4,
      height: groupDivHeight8,
    };
  }, [groupDivTop4, groupDivLeft4, groupDivWidth4, groupDivHeight8]);

  const lineIcon3Style = useMemo(() => {
    return {
      top: lineIconTop3,
      left: lineIconLeft3,
      width: lineIconWidth3,
    };
  }, [lineIconTop3, lineIconLeft3, lineIconWidth3]);

  const subtractIcon3Style = useMemo(() => {
    return {
      width: subtractIconWidth3,
      height: subtractIconHeight3,
    };
  }, [subtractIconWidth3, subtractIconHeight3]);

  return (
    <div
      className={`w-[518px] relative max-w-full flex flex-col items-start justify-start gap-7 text-left text-11xl text-giga-fiber-lila font-saira-condensed ${className}`}
      style={property1DefaultStyle}
    >
      <b
        className="self-stretch relative leading-[125%]"
        style={pOTENZIALFRDIEStyle}
      >
        POTENZIAL FÜR DIE REGION
      </b>
      <div
        className="w-[485px] flex flex-col items-start justify-start gap-6 text-base text-black font-saira"
        style={frameDivStyle}
      >
        <div className="self-stretch relative h-[32.5px]" style={groupDivStyle}>
          <div
            className="absolute top-[0px] left-[0px] leading-[125%] inline-block w-[423.4px]"
            style={investitionenInDokumentationStyle}
          >
            Investitionen in Dokumentation und Modernisierung
          </div>
          <div
            className="absolute top-[8px] left-[0px] w-[485px] h-[24.5px]"
            style={groupDiv1Style}
          >
            <img
              className="absolute top-[24.5px] left-[0px] max-h-full w-[485px]"
              alt=""
              src="/line-5.svg"
              style={lineIconStyle}
            />
            <img
              className="relative rounded-12xs w-[23.1px] h-[13.1px]"
              alt=""
              src="/subtract.svg"
              style={subtractIconStyle}
            />
          </div>
        </div>
        <div
          className="self-stretch relative h-[28.5px]"
          style={groupDiv2Style}
        >
          <div
            className="absolute top-[0px] left-[0px] leading-[125%] inline-block w-[442.1px]"
            style={wirtschaftlicheAuswirkungenUStyle}
          >
            Wirtschaftliche Auswirkungen und Infrastruktur
          </div>
          <div
            className="absolute top-[4px] left-[0px] w-[485px] h-[24.5px]"
            style={groupDiv3Style}
          >
            <img
              className="absolute top-[24.5px] left-[0px] max-h-full w-[485px]"
              alt=""
              src="/line-5.svg"
              style={lineIcon1Style}
            />
            <img
              className="relative rounded-12xs w-[23.1px] h-[13.1px]"
              alt=""
              src="/subtract.svg"
              style={subtractIcon1Style}
            />
          </div>
        </div>
        <div
          className="self-stretch relative h-[32.5px]"
          style={groupDiv4Style}
        >
          <div
            className="absolute top-[0px] left-[0px] leading-[125%] inline-block w-[442.1px]"
            style={internationaleStandardsUndStyle}
          >
            Internationale Standards und Wettbewerbsfähigkeit
          </div>
          <div
            className="absolute top-[8px] left-[0px] w-[485px] h-[24.5px]"
            style={groupDiv5Style}
          >
            <img
              className="absolute top-[24.5px] left-[0px] max-h-full w-[485px]"
              alt=""
              src="/line-5.svg"
              style={lineIcon2Style}
            />
            <img
              className="relative rounded-12xs w-[23.1px] h-[13.1px]"
              alt=""
              src="/subtract.svg"
              style={subtractIcon2Style}
            />
          </div>
        </div>
        <div
          className="self-stretch relative h-[28.5px]"
          style={groupDiv6Style}
        >
          <div
            className="absolute top-[0px] left-[0px] leading-[125%] inline-block w-[442.1px]"
            style={schaffungVonArbeitspltzenStyle}
          >
            Schaffung von Arbeitsplätzen
          </div>
          <div
            className="absolute top-[4px] left-[0px] w-[485px] h-[24.5px]"
            style={groupDiv7Style}
          >
            <div
              className="absolute top-[0px] left-[0px] w-[485px] h-[24.5px]"
              style={groupDiv8Style}
            >
              <img
                className="absolute top-[24.5px] left-[0px] max-h-full w-[485px]"
                alt=""
                src="/line-5.svg"
                style={lineIcon3Style}
              />
              <img
                className="relative rounded-12xs w-[23.1px] h-[13.1px]"
                alt=""
                src="/subtract.svg"
                style={subtractIcon3Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Property1Default.propTypes = {
  className: PropTypes.string,

  /** Style props */
  property1DefaultWidth: PropTypes.any,
  property1DefaultPosition: PropTypes.any,
  property1DefaultGap: PropTypes.any,
  pOTENZIALFRDIEFontSize: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivGap: PropTypes.any,
  groupDivHeight: PropTypes.any,
  investitionenInDokumentationTop: PropTypes.any,
  investitionenInDokumentationLeft: PropTypes.any,
  investitionenInDokumentationFontSize: PropTypes.any,
  investitionenInDokumentationWidth: PropTypes.any,
  groupDivTop: PropTypes.any,
  groupDivLeft: PropTypes.any,
  groupDivWidth: PropTypes.any,
  groupDivHeight1: PropTypes.any,
  lineIconTop: PropTypes.any,
  lineIconLeft: PropTypes.any,
  lineIconWidth: PropTypes.any,
  subtractIconWidth: PropTypes.any,
  subtractIconHeight: PropTypes.any,
  groupDivHeight2: PropTypes.any,
  wirtschaftlicheAuswirkungenTop: PropTypes.any,
  wirtschaftlicheAuswirkungenLeft: PropTypes.any,
  wirtschaftlicheAuswirkungenFontSize: PropTypes.any,
  wirtschaftlicheAuswirkungenWidth: PropTypes.any,
  groupDivTop1: PropTypes.any,
  groupDivLeft1: PropTypes.any,
  groupDivWidth1: PropTypes.any,
  groupDivHeight3: PropTypes.any,
  lineIconTop1: PropTypes.any,
  lineIconLeft1: PropTypes.any,
  lineIconWidth1: PropTypes.any,
  subtractIconWidth1: PropTypes.any,
  subtractIconHeight1: PropTypes.any,
  groupDivHeight4: PropTypes.any,
  internationaleStandardsUndTop: PropTypes.any,
  internationaleStandardsUndLeft: PropTypes.any,
  internationaleStandardsUndFontSize: PropTypes.any,
  internationaleStandardsUndWidth: PropTypes.any,
  groupDivTop2: PropTypes.any,
  groupDivLeft2: PropTypes.any,
  groupDivWidth2: PropTypes.any,
  groupDivHeight5: PropTypes.any,
  lineIconTop2: PropTypes.any,
  lineIconLeft2: PropTypes.any,
  lineIconWidth2: PropTypes.any,
  subtractIconWidth2: PropTypes.any,
  subtractIconHeight2: PropTypes.any,
  groupDivHeight6: PropTypes.any,
  schaffungVonArbeitspltzenTop: PropTypes.any,
  schaffungVonArbeitspltzenLeft: PropTypes.any,
  schaffungVonArbeitspltzenFontSize: PropTypes.any,
  schaffungVonArbeitspltzenWidth: PropTypes.any,
  groupDivTop3: PropTypes.any,
  groupDivLeft3: PropTypes.any,
  groupDivWidth3: PropTypes.any,
  groupDivHeight7: PropTypes.any,
  groupDivTop4: PropTypes.any,
  groupDivLeft4: PropTypes.any,
  groupDivWidth4: PropTypes.any,
  groupDivHeight8: PropTypes.any,
  lineIconTop3: PropTypes.any,
  lineIconLeft3: PropTypes.any,
  lineIconWidth3: PropTypes.any,
  subtractIconWidth3: PropTypes.any,
  subtractIconHeight3: PropTypes.any,
};

export default Property1Default;
