import React from "react";
import { useTranslation } from 'react-i18next';

const Header = ({scrollToFrame4}) => {

  const { t } = useTranslation(); // Call useTranslation here  
  console.log("header_transforming_infrastructure:", t("header_transforming_infrastructure"));

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute rounded-b-3xl top-0 left-0 w-full h-full object-cover"
        src="headerbgvideo.mov"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <span className="absolute top-5 left-5 z-10">
        <img src="gigafibertoplogo.svg" alt="Gigafiber Logo" />
      </span>

      <div className="absolute bottom-5 left-5 z-10">
        <p className="font-bold text-8xl text-white">
          {t("header_transforming_infrastructure")}
        </p>
        <p className="font-bold text-8xl text-[#903fff] leading-2">
         {t("header_driving_regional_growth")}
        </p>
        <p onClick={scrollToFrame4} className="font-bold text-[20px] text-white mt-4">
          {t("header_learn_more")}
        </p>
      </div>
    </div>
  );
};

export default Header;
