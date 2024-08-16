import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const TechnologieInfrastrukturZieleDerZusammenarbeitMitGIGAFIBER = ({
  className = "",
  objects,
  technologieInfrastrukturZiWidth,
  technologieInfrastrukturZiHeight,
  technologieInfrastrukturZiAlignSelf,
  technologieInfrastrukturFontSize,
}) => {
  const technologieInfrastrukturZiStyle = useMemo(() => {
    return {
      width: technologieInfrastrukturZiWidth,
      height: technologieInfrastrukturZiHeight,
      alignSelf: technologieInfrastrukturZiAlignSelf,
    };
  }, [
    technologieInfrastrukturZiWidth,
    technologieInfrastrukturZiHeight,
    technologieInfrastrukturZiAlignSelf,
  ]);

  const technologieInfrastrukturStyle = useMemo(() => {
    return {
      fontSize: technologieInfrastrukturFontSize,
    };
  }, [technologieInfrastrukturFontSize]);

  return (
    <div
      className={`w-[1276px] relative max-w-full h-[92px] text-left text-11xl text-white  ${className}`}
      style={technologieInfrastrukturZiStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-blueviolet" />
      <img
        className="absolute h-[41.3%] w-[3.29%] top-[29.35%] right-[2.82%] bottom-[29.35%] left-[93.89%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={objects}
      />
      <b
        className="absolute top-[30.43%] left-[2.35%] leading-[125%] uppercase"
        style={technologieInfrastrukturStyle}
      >{`Technologie & Infrastruktur Ziele der Zusammenarbeit mit GIGA FIBER`}</b>
    </div>
  );
};

TechnologieInfrastrukturZieleDerZusammenarbeitMitGIGAFIBER.propTypes = {
  className: PropTypes.string,
  objects: PropTypes.string,

  /** Style props */
  technologieInfrastrukturZiWidth: PropTypes.any,
  technologieInfrastrukturZiHeight: PropTypes.any,
  technologieInfrastrukturZiAlignSelf: PropTypes.any,
  technologieInfrastrukturFontSize: PropTypes.any,
};

export default TechnologieInfrastrukturZieleDerZusammenarbeitMitGIGAFIBER;
