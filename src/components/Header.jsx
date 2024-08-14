import React from "react";

const Header = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute rounded-3xl top-0 left-0 w-full h-full object-cover"
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
          TRANSFORMING INFRASTRUCTURE.
        </p>
        <p className="font-bold text-8xl text-[#1E1A2E] leading-2">
          DRIVING REGIONAL GROWTH.​
        </p>
        <p className="font-bold text-[20px] text-white mt-4">
          MEHR ERFAHREN →​
        </p>
      </div>
    </div>
  );
};

export default Header;
