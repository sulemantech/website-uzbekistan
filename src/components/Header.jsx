import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Header = ({ isMobile, scrollToFrame4 }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menuRef is defined and the clicked element is not within the menuRef
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative h-screen max-md:w-[100%] mx-auto overflow-hidden">
      <video
        className="absolute rounded-b-3xl top-0 left-0 w-full h-full object-cover"
        src="headerbgvideo.mov"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute max-md:mt-[20px] max-md:scale-x-95 flex justify-between w-[97%] left-1/2 transform -translate-x-1/2 top-5 z-10">
        <img className="max-md:h-[21px] max-md:w-[169px]" src="gigafibertoplogo.svg" alt="Gigafiber Logo" />
        <div className="relative max-md:mr-16 inline-block text-left">
          <span
            className="cursor-pointer flex space-x-2"
            onClick={toggleDropdown}
          >
            <img className="" src="globe.svg" alt="Language" />
            <p className="font-bold text-[22px] leading-[125%] text-white">
              <span className="max-md:hidden">Select Language</span>{" "}
              <span className="md:hidden">DE</span>
            </p>
            {/* <img className="" src="globe.svg" alt="Language" /> */}
            <span className="mt-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.666275 0.0373535C0.832474 0.0373535 0.991411 0.105467 1.10603 0.225814L6.56024 5.95243C6.79957 6.20371 7.20043 6.20371 7.43976 5.95243L12.894 0.225815C13.0086 0.105467 13.1675 0.0373535 13.3337 0.0373535H13.3915C13.9254 0.0373535 14.1995 0.676856 13.8312 1.0635L7.43976 7.7742C7.20043 8.02548 6.79957 8.02548 6.56024 7.7742L0.168751 1.0635C-0.199496 0.676857 0.0745648 0.0373535 0.608509 0.0373535H0.666275Z"
                  fill="white"
                />
              </svg>
            </span>
          </span>
          {isOpen && (
            <div className="absolute cursor-pointer left-3 mt-3 bg-transparent rounded-[10px] z-10 text-white text-[18px] leading-[27.5px] font-semibold">
              <ul className="flex flex-col items-start leading-[27.5px] mb-3 justify-center">
                <li
                  className=" text-center hover:border-white hover:border-b-[2px]"
                  onClick={() => changeLanguage("en")}
                >
                  <span className="max-md:hidden"> ENGLISH (EN)</span>
                  <span className="md:hidden">EN</span>
                </li>
                <li
                  className=" text-center hover:border-white hover:border-b-[2px]"
                  onClick={() => changeLanguage("ru")}
                >
                  <span className="max-md:hidden">RUSSISCH (RUS)</span>
                  <span className="md:hidden">RUS</span>
                </li>
                <li
                  className="text-center hover:border-white hover:border-b-[2px]"
                  onClick={() => changeLanguage("de")}
                >
                  <span className="max-md:hidden"> DEUTSCH (DE) </span>
                  <span className="md:hidden">DE</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 pointer-events-none w-[96%] max-md:w-[88%] break-words left-1/2 transform -translate-x-1/2 z-10">
        <p className="font-bold text-8xl max-md:text-[46px] max-md:leading-[100%] text-white">
          {t("header_transforming_infrastructure")}
        </p>
        <p className="font-bold text-8xl max-md:text-[46px] text-[#903FFF] max-md:leading-[100%] leading-2">
          {t("header_driving_regional_growth")}
        </p>
        <p
          onClick={scrollToFrame4}
          className="font-bold pointer-events-auto text-[20px] group max-md:hidden text-white mt-4 ml-2 cursor-pointer flex space-x-3 items-center"
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
          className="absolute top-2.5 max-md:mt-[18px] right-5 max-md:right-7 z-20 flex flex-col items-center justify-center w-12 h-12 rounded-full"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      )}

      <div
        ref={menuRef} // Attach ref to the menu div
        className={`fixed z-50 top-0 right-0 w-[70vw] rounded-l-3xl h-[70%] bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center mt-10 space-y-6 text-[#8643F5]">
          <button
            onClick={() => navigateToPage()}
            className="text-[22px] flex justify-between space-x-3 items-center font-bold leading-[125%] group border-b-2 border-[#8643F5] w-[182px] h-[42px] cursor-pointer hover:text-[#8643F5]"
          >
            <span> {t("CU29 TECH")}</span>
            <span>
              <img
                className="w-[25px] h-[22px] group-hover:rotate-90 transition-transform"
                src="objects1.svg"
                alt=""
              />
            </span>
          </button>
          <button
            onClick={() => navigateToPage()}
            className="text-[22px] font-bold flex justify-between space-x-3 items-center leading-[125%] group border-b-2 border-[#8643F5] w-[182px] h-[42px] cursor-pointer hover:text-[#8643F5]"
          >
            <span> {t("GIGA DRIVE HUB")}</span>
            <span>
              <img
                className="w-[25px] h-[22px] group-hover:rotate-90 transition-transform"
                src="objects1.svg"
                alt=""
              />
            </span>
          </button>
          <button
            onClick={() => navigateToPage()}
            className="text-[22px] font-bold flex justify-between space-x-3 items-center leading-[125%] group border-b-2 border-[#8643F5] w-[182px] h-[42px] cursor-pointer hover:text-[#8643F5]"
          >
            <span> {t("GIGA FUTURE")} </span>
            <span>
              <img
                className="w-[25px] h-[22px] group-hover:rotate-90 transition-transform"
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
          className="absolute flex justify-center items-center bottom-4 left-1/2 transform -translate-x-1/2 w-[145px] h-[49px] px-[52px] py-[10px] text-center text-white bg-[#8643F5] rounded-22xl leading-[125%] text-[22px] font-bold"
        >
          <span>KONTAKT</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
