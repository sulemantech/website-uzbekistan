import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';


const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div
      className={`w-[97vw] mx-auto relative h-[15.5rem] text-left text-[1rem] text-white font-saira ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-22xl bg-giga-fiber-lila w-[97vw] mx-auto h-[15.5rem]" />
      <img
        className="absolute top-[calc(50%_+_46px)] left-[4.394rem] w-[18.75rem] h-[2.25rem] overflow-hidden"
        alt=""
        src="/ebene-11.svg"
      />
      <div className="absolute top-[11.356rem] right-7 flex flex-row items-center justify-start gap-[1.25rem]">
        {/* <div className="relative leading-[125%]">Kontakt</div> */}
        <div onClick={()=>{handleClick("/impersum")}} className="relative leading-[125%]">Impressum</div>
        <div onClick={()=>{handleClick("/datenschutz")}} className="relative leading-[125%]">Datenschutz</div>
        {/* <div className="relative leading-[125%]">AGB</div> */}
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
