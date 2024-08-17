import React, { useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent7 from "./FrameComponent7";

const FrameComponent4 = forwardRef(
  ({ isMobile, scrollToFrame5, scrollToFrame6, scrollToFrame7 }, ref) => {
    const { t } = useTranslation();
    const [activeCard, setActiveCard] = useState(null);

    const cardData = [
      {
        number: "01",
        title: t("frameComponent4_card1_title"),
        description: t("frameComponent4_card1_description"),
        imgSrc: "CU29TECH.png",
        imgSrc2: "cube_moble.png",
        buttonText: t("frameComponent4_card1_buttonText"),
        scrollTo: scrollToFrame5,
        component: <FrameComponent5 />,
      },
      {
        number: "02",
        title: t("frameComponent4_card2_title"),
        description: t("frameComponent4_card2_description"),
        imgSrc: "GIGA DRIVE HUB.png",
        imgSrc2: "gigdrive.png",
        buttonText: t("frameComponent4_card2_buttonText"),
        scrollTo: scrollToFrame6,
        component: <FrameComponent6 />,
      },
      {
        number: "03",
        title: t("frameComponent4_card3_title"),
        description: t("frameComponent4_card3_description"),
        imgSrc: "GIGA FUTURE.png",
        imgSrc2: "giga_future.png",
        buttonText: t("frameComponent4_card3_buttonText"),
        scrollTo: scrollToFrame7,
        component: <FrameComponent7 />,
      },
    ];

    const handleCardClick = (index) => {
      setActiveCard(index === activeCard ? null : index);
    };

    return (
      <div
        ref={ref}
        className="flex flex-col items-center lg:flex-row justify-center max-md:items-center flex-wrap mt-4 gap-3 max-md:mb-10 p-2 max-md:px-0"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full lg:w-[32%] max-lg:w-[90%] max-md:mb-2 max-lg:mx-0"
          >
            <div
              onClick={() => {
                handleCardClick(index);
                card.scrollTo();
              }}
              className="relative group cursor-pointer w-full h-[582px] max-md:h-[239px] rounded-lg overflow-hidden"
            >
              <p className="absolute top-[74px] left-[32px] text-5xl max-md:text-[30px] max-md:top-[41px] text-white z-50">
                {card.number}
              </p>
              <img
                className="absolute group-hover:scale-105 transition-all top-0 left-0 w-full h-full object-cover max-md:hidden"
                alt={card.title}
                src={card.imgSrc}
              />
              <img
                className="absolute group-hover:scale-105 transition-all top-0 left-0 w-full h-full object-cover md:hidden"
                alt={card.title}
                src={card.imgSrc2}
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-60% to-[#3b2a89e3] w-full h-[8.438rem]" />
              <div className="flex flex-col-reverse justify-between bottom-[63px] max-md:bottom-[18px] left-1/2 transform -translate-x-1/2 min-w-[85%] absolute ">
                <div className=" text-[#8643F5] mt-10 text-lg flex justify-between">
                  <b className="font-bold text-[44px] max-md:text-[32px] leading-8 tracking-tight">{card.title}</b>
                  <img
                    className="md:group-hover:rotate-90 transition-transform"
                    src="objects1.svg"
                    alt=""
                  />
                </div>
                <div className="text-3xl max-md:text-[22px] font-bold text-white">
                  <p className="m-0">{card.description}</p>
                </div>
              </div>
            </div>
            {isMobile && activeCard === index && (
              <div className="-mt-8">{card.component}</div>
            )}
          </div>
        ))}
      </div>
    );
  }
);

export default FrameComponent4;
