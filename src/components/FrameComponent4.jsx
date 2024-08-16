import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent7 from "./FrameComponent7";

const FrameComponent4 = forwardRef(({ isMobile, scrollToFrame5, scrollToFrame6, scrollToFrame7 }, ref) => {
  const { t } = useTranslation();

  const cardData = [
    {
      number: "01",
      title: t("frameComponent4_card1_title"),
      description: t("frameComponent4_card1_description"),
      imgSrc: "01.png",
      buttonText: t("frameComponent4_card1_buttonText"),
      scrollTo: scrollToFrame5,
      frameComponent: <FrameComponent5 />,
    },
    {
      number: "02",
      title: t("frameComponent4_card2_title"),
      description: t("frameComponent4_card2_description"),
      imgSrc: "02.png",
      buttonText: t("frameComponent4_card2_buttonText"),
      scrollTo: scrollToFrame6,
      frameComponent: <FrameComponent6 />,
    },
    {
      number: "03",
      title: t("frameComponent4_card3_title"),
      description: t("frameComponent4_card3_description"),
      imgSrc: "03.png",
      buttonText: t("frameComponent4_card3_buttonText"),
      scrollTo: scrollToFrame7,
      frameComponent: <FrameComponent7 />,
    },
  ];

  return (
    <div ref={ref} className="flex justify-center flex-wrap mt-4 gap-3 p-2 max-md:px-0">
      {cardData.map((card, index) => (
        <div key={index} className="relative w-[445px] h-auto max-lg:w-full max-lg:mx-4 rounded-lg overflow-hidden">
          <div
            onClick={card.scrollTo}
            className="relative group cursor-pointer w-full h-[582px] rounded-lg overflow-hidden"
          >
            <p className="absolute top-[74px] left-[40px] text-5xl text-white z-50">{card.number}</p>
            <img
              className="absolute group-hover:scale-105 transition-all top-0 left-0 w-full h-full object-cover"
              alt={card.title}
              src={card.imgSrc}
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[#3B2A89] to-transparent w-full h-[8.438rem]" />
            <div className="w-[85%] absolute bottom-[62.5px] left-[40px] text-[#903fff] text-lg flex justify-between">
              <b className="font-bold text-5xl">{card.title}</b>
              <img
                className="group-hover:rotate-90 transition-transform"
                src="objects1.svg"
                alt=""
              />
            </div>
            <div className="absolute bottom-[128px] left-[40px] text-3xl font-bold text-white">
              <p className="m-0">{card.description}</p>
            </div>
          </div>
          {isMobile && card.frameComponent}
        </div>
      ))}
    </div>
  );
});

export default FrameComponent4;
