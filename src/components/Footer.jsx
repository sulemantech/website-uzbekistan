import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className={`mx-[35px] h-[288px] max-md:mx-0 pb-10 max-md:pb-0 text-left text-base text-white font-saira ${className}`}>
      <div className="bg-giga-fiber-lila rounded-22xl max-md:rounded-b-none flex items-end justify-between max-md:flex-col-reverse max-md:items-center max-md:justify-center h-full mb-10 max-md:mb-0">
        <div className="flex justify-center mb-10 ml-5 max-md:-ml-[149px]">
          <img
            className="w-[75%] max-w-[18.75rem] max-md:w-[199px] max-md:h-[24px] h-auto"
            alt=""
            src="/ebene-11.svg"
          />
        </div>
        <div className="flex items-center mb-11 mr-10 max-md:mr-0 gap-4 text-base max-md:-ml-[149px]">
          <div
            onClick={() => handleClick("/impersum")}
            className="cursor-pointer hidden"
          >
            Kontakt
          </div>
          <div
            onClick={() => handleClick("/impersum")}
            className="cursor-pointer"
          >
            Impressum
          </div>
          <div
            onClick={() => handleClick("/datenschutz")}
            className="cursor-pointer"
          >
            Datenschutz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
