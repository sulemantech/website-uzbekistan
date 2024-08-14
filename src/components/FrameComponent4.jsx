import { number } from "prop-types";
import React from "react";

const FrameComponent4 = () => {
  const cardData = [
    {
      number:"01",
      title: "CU29 TECH",
      description: "WIE STEIGERN ​WIR DIE REGIONALE WIRTSCHAFTSKRAFT",
      imgSrc: "01.png",
      buttonText: "Learn More",
    },
    {
      number:"02",
      title: "GIGA DRIVE HUB",
      description: "WIE UNTERSTÜTZEN WIR DIE AUTOMOBILINDUSTRIE?​",
      imgSrc: "02.png",
      buttonText: "View Details",
    },
    {
      number:"03",
      title: "GIGA FUTURE",
      description: "WIE FÖRDERN WIR WACHSTUM UND DIGITALE INTEGRATION?​",
      imgSrc: "03.png",
      buttonText: "View Details",
    },
    // Add more card objects as needed
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4 p-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative cursor-pointer w-[32%] h-[30.2rem] border border-gray-300 rounded-lg overflow-hidden"
        >
          <p className="absolute top-[2rem] left-[2rem] text-5xl text-white z-50">{card.number}</p>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt={card.title}
            src={card.imgSrc}
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-[8.438rem]" />
          <div className="w-[85%] group absolute bottom-[2rem] text-[#903fff]  left-[2rem] text-lg flex justify-between">
            <b className="font-bold text-5xl">{card.title}</b>
            <img className="group-hover:rotate-90 transition-transform" src="objects1.svg" alt="" srcset="" />
          </div>
          <div className="absolute bottom-[5rem] left-[2rem] text-3xl font-bold text-white">
            <p className="m-0">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrameComponent4;
