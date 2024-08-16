import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = ({ isMobile, scrollToFrame4 }) => {
  const { t } = useTranslation(); // Call useTranslation here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigateToPage = () => {
    scrollToFrame4();
    setIsMenuOpen(false);
  };

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

      <span className="absolute flex justify-between w-full top-5 left-5 z-10">
        <img src="gigafibertoplogo.svg" alt="Gigafiber Logo" />
        <div className="relative mr-14 inline-block text-left">
          <span className=" cursor-pointer" onClick={toggleDropdown}>
            <img src="lang.png" alt="Language" />
          </span>
          {isOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
              <ul className="">
                <li className=" hover:bg-gray-100 cursor-pointer">
                  Option 1
                </li>
                <li className=" hover:bg-gray-100 cursor-pointer">
                  Option 2
                </li>
                <li className=" hover:bg-gray-100 cursor-pointer">
                  Option 3
                </li>
              </ul>
            </div>
          )}
        </div>
      </span>

      <div className="absolute bottom-5 left-5 z-10">
        <p className="font-bold text-8xl max-md:text-[46px] max-md:leading-[100%] text-white">
          {t("header_transforming_infrastructure")}
        </p>
        <p className="font-bold text-8xl max-md:text-[46px] text-[#903fff] max-md:leading-[100%] leading-2">
          {t("header_driving_regional_growth")}
        </p>
        <p
          onClick={scrollToFrame4}
          className="font-bold text-[20px] group max-md:hidden text-white mt-4 ml-2 cursor-pointer flex space-x-3 items-center"
        >
          <span>{t("header_learn_more")}</span>
          <span>
            <img
              className="w-[20px] group-hover:rotate-90 transition-transform"
              src="objects2.svg"
              alt=""
            />
          </span>
        </p>
      </div>

      {isMobile && (
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 z-20 flex flex-col items-center justify-center w-12 h-12 rounded-full"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      )}

      <div
        className={`fixed z-50 top-0 right-0 w-[70vw] rounded-l-3xl h-[70%] bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center mt-10 space-y-6 text-[#903fff]">
          <button
            onClick={() => navigateToPage()}
            className="text-[22px] flex justify-between space-x-3 items-center font-bold leading-[125%] group border-b-2 border-[#903fff] w-[182px] h-[42px] cursor-pointer hover:text-[#903fff]"
          >
            <span> {t("CU29 TECH")}</span>
            <span>
              <img
                className="w-[20px] group-hover:rotate-90 transition-transform"
                src="objects1.svg"
                alt=""
              />
            </span>
          </button>
          <button
            onClick={() => navigateToPage()}
            className="text-[22px] font-bold flex justify-between space-x-3 items-center leading-[125%] group border-b-2 border-[#903fff] w-[182px] h-[42px] cursor-pointer hover:text-[#903fff]"
          >
            <span> {t("GIGA DRIVE HUB")}</span>
            <span>
              <img
                className="w-[20px] group-hover:rotate-90 transition-transform"
                src="objects1.svg"
                alt=""
              />
            </span>
          </button>
          <button
            onClick={() => navigateToPage()}
            className="text-[22px] font-bold flex justify-between space-x-3 items-center leading-[125%] group border-b-2 border-[#903fff] w-[182px] h-[42px] cursor-pointer hover:text-[#903fff]"
          >
            <span> {t("GIGA FUTURE")} </span>
            <span>
              <img
                className="w-[20px] group-hover:rotate-90 transition-transform"
                src="objects1.svg"
                alt=""
              />
            </span>
          </button>
        </div>
        <a
          href="mailto:info@gigafiber.group"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute flex justify-center items-center bottom-4 left-1/2 transform -translate-x-1/2 w-[145px] h-[49px] px-[52px] py-[10px] text-center text-white bg-[#903fff] rounded-22xl leading-[125%] text-[22px] font-bold"
        >
          <span>KONTAKT</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
