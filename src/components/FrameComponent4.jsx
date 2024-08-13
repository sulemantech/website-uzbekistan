import { useCallback } from "react";
import CU29TECH from "./CU29TECH";
import GIGADRIVEHUB from "./GIGADRIVEHUB";
import GIGAFUTURE from "./GIGAFUTURE";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  const onGIGADRIVEHUBClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`flex flex-row items-start justify-start py-[2.5rem] px-[0rem] gap-[1.062rem] ${className}`}
    >
      <CU29TECH
        rectangle2="/rectangle-2@2x.png"
        cU29TECHWidth="27.813rem"
        cU29TECHHeight="36.375rem"
        frameDivTop="4.625rem"
        frameDivLeft="2.5rem"
        frameDivWidth="23.75rem"
        frameDivGap="14.687rem"
        divFontSize="3.438rem"
        frameDivGap1="0.937rem"
        wIESTEIGERNWIRContainerFontSize="1.875rem"
        frameDivHeight="2.375rem"
        frameDivGap2="9rem"
        cU29TECHFontSize="3.125rem"
        objectsIconWidth="2.375rem"
        objectsIconHeight="2.125rem"
      />
      <GIGADRIVEHUB
        rectangle2="/rectangle-21@2x.png"
        gIGADRIVEHUBWidth="27.813rem"
        gIGADRIVEHUBHeight="36.375rem"
        frameDivTop="4.625rem"
        frameDivLeft="2.5rem"
        frameDivWidth="23.75rem"
        frameDivGap="14.687rem"
        divFontSize="3.438rem"
        frameDivGap1="0.937rem"
        wIEUNTERSTTZENWIRFontSize="1.875rem"
        frameDivHeight="2.375rem"
        frameDivGap2="2.812rem"
        gIGADRIVEHUBFontSize="3.125rem"
        objectsIconWidth="2.375rem"
        objectsIconHeight="2.125rem"
        onGIGADRIVEHUBClick={onGIGADRIVEHUBClick}
      />
      <GIGAFUTURE
        rectangle2="/rectangle-22@2x.png"
        gIGAFUTUREWidth="27.813rem"
        gIGAFUTUREHeight="36.375rem"
        frameDivTop="4.625rem"
        frameDivLeft="2.5rem"
        frameDivWidth="23.75rem"
        frameDivGap="14.687rem"
        divFontSize="3.438rem"
        frameDivGap1="0.937rem"
        wIEFRDERNWIRContainerFontSize="1.875rem"
        frameDivHeight="2.375rem"
        frameDivGap2="6.312rem"
        gIGAFUTUREFontSize="3.125rem"
        objectsIconWidth="2.375rem"
        objectsIconHeight="2.125rem"
      />
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
