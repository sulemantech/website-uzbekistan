import React from "react";

const Header = () => {
  return (
    <>
      <div className="">
        <video className="rounded-b-xl" src="headerbgvideo.mov"></video>
        <span className="absolute top-5">
          <img className="ml-5" src="gigafibertoplogo.svg" alt="" />
        </span>
        <div className="absolute bottom-5">
          <p className="font-bold  text-8xl ml-5 text-white ">
            TRANSFORMING INFRASTRUCTURE.
          </p>
          <p className="font-bold  text-8xl ml-5 text-black leading-2">
            DRIVING REGIONAL GROWTH.​
          </p>
          <p className="font-bold  text-[20px] ml-5 text-white">
            MEHR ERFAHREN →​
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
