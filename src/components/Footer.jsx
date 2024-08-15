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
    className={`w-[95.5vw] mx-auto relative h-[15.5rem] text-left text-base text-white font-saira ${className}`}
  >
    <div className="absolute top-0 left-0 rounded-3xl bg-giga-fiber-lila w-full h-full" />
    <img
      className="absolute top-[calc(50%+2.875rem)] left-[5%] w-[75%] max-w-[18.75rem] h-auto overflow-hidden"
      alt=""
      src="/ebene-11.svg"
    />
    <div className="absolute bottom-4 max-md:bottom-1/2 max-md:right-1/3 right-4 flex flex-row items-center justify-start gap-4 text-sm sm:text-base">
      <div onClick={() => handleClick("/impersum")} className="cursor-pointer">
        Impressum
      </div>
      <div onClick={() => handleClick("/datenschutz")} className="cursor-pointer">
        Datenschutz
      </div>
    </div>
  </div>
  
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
