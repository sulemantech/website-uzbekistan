import React, { useState, forwardRef } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import DropdownFaq from "./SingleDropDown";
import { useTranslation } from "react-i18next";
const FrameComponent6 = forwardRef((props, ref) => {
  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation(); // Call useTranslation here
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const questionsAndAnswers = [
    {
      question: t("frameComponent5_q1_question"),
      answer: t("frameComponent5_q1_answer"),
    },
    {
      question: t("frameComponent5_q2_question"),
      answer: t("frameComponent5_q2_answer"),
    },
    {
      question: t("frameComponent5_q3_question"),
      answer: t("frameComponent5_q3_answer"),
    },
    {
      question: t("frameComponent5_q4_question"),
      answer: t("frameComponent5_q4_answer"),
    },
    {
      question: t("frameComponent5_q5_question"),
      answer: t("frameComponent5_q5_answer"),
    },
  ];

  const imagedesData = [
    {
      img: "R1.png",
      text: t("frameComponent6_img1_description"),
    },
    {
      img: "R2.png",
      text: t("frameComponent6_img2_description"),
    },
    {
      img: "R3.png",
      text: t("frameComponent6_img3_description"),
    },
    {
      img: "R4.png",
      text: t("frameComponent6_img4_description"),
    },
    {
      img: "R5.png",
      text: t("frameComponent6_img5_description"),
    },
    {
      img: "R6.png",
      text: t("frameComponent6_img6_description"),
    },
  ];
  return (
    <>
      <div ref={ref} className="bg-white rounded-22xl p-10 m-5 max-md:m-1">
        <div className="flex justify-between items-start space-x-10 rounded-2xl max-w-[1500px] mx-auto max-xl:flex-col max-xl:space-y-5 max-xl:space-x-0 max-xl:h-fit">
          <div className="grid grid-cols-1 max-md:hidden gap-4 h-auto w-full overflow-hidden">
            <div className="relative col-span-1 h-[320px] max-xl:h-auto rounded-xl overflow-hidden">
              <video
                className="rounded-xl w-full h-full object-cover"
                src="03_GIGADriveHub_low_658x264_1.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute hidden w-full bg-gradient-to-t from-[#8643F560] to-transparent z-50 h-full top-0 rounded-xl overflow-hidden">
                <span className="text-white absolute bottom-4 left-8  text-[55px] max-lg:text-[36px] max-md:text-[28px] font-bold leading-[125%]">
                  GIGA DRIVE HUB
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 max-h-[279] rounded-xl h-auto gap-4 col-span-1 max-lg:h-auto max-md:grid-cols-1">
              <span className="w-full">
                <img
                  src="d9.png"
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </span>
              <span className="w-full">
                <img
                  src="car.png"
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-7 ">
            <span className="flex space-x-7 font-medium leading-[68px] text-[#8643F5]">
              <p className="border-r-2 pr-3 text-[55px] max-md:hidden  border-[#8643F5]">
                02
              </p>{" "}
              <p className="text-3xl text-[30px] max-md:hidden w-[518px] max-xl:w-full font-bold">
                {t("frameComponent6_title")}
              </p>
            </span>
            <div className="w-[518px] font-saira max-md:hidden max-xl:w-full text-[16px] font-normal text-left">
              {t("frameComponent6_intro_part1")}
              <br />
              {t("frameComponent6_intro_part2")}
              <br />
              <br />
              {t("frameComponent6_intro_part3")}
              <br />
              {t("frameComponent6_intro_part4")}
            </div>
            <div className="w-[518px] md:hidden max-xl:w-full text-[16px] font-normal text-left">
              {t("frameComponent6_intro_part1")}
              <br />
              {t("frameComponent6_intro_part2")}
              <br />
              <br />
              {showMore && (
                <>
                  {t("frameComponent6_intro_part3")}
                  <br />
                  {t("frameComponent6_intro_part4")}
                  <br />
                </>
              )}
              <button
                onClick={handleShowMore}
                className="text-[#903FFF] underline"
              >
                {showMore ? "Mehr lesen" : "Weniger lesen"}
              </button>
            </div>
          </div>
        </div>
        <div className=" max-w-[1500px]  mx-auto mt-[61px] bg-[#8643F5] rounded-lg overflow-hidden h-[172px] max-md:h-auto p-2 flex justify-center items-center text-white text-[30px] max-md:text-[4vw] max-lg:text-[2.8vw] font-bold leading-[107%] uppercase">
          <span className=" my-5 max-md:mx-[30px] md:px-5 mx-auto">
            {t("frameComponent6_highlight")}
          </span>
        </div>

        <div className="flex justify-between space-x-10 mt-10 max-w-[1500px] mx-auto rounded-2xl h-[580px] max-xl:flex-col max-xl:space-y-5 max-xl:space-x-0 max-xl:h-fit ">
          <div className="flex flex-col space-y-7 max-md:hidden">
            <span className=" text-5xl font-medium leading-[68px] text-[#903FFF]">
              <p className="text-3xl font-bold">
                {t("frameComponent6_infrastructure_title")}
              </p>
            </span>
            <div className="w-[518px] max-xl:w-full text-[16px] font-normal font-saira text-left">
              <span>{t("frameComponent6_infrastructure_paragraph")}</span>
              <span>{t("frameComponent6_infrastructure_paragraph")}</span>
              <ul className="list-none">
                <li className="relative pl-5 mb-2 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#903FFF] before:rounded-full">
                  {t("frameComponent6_infrastructure_bullet1")}
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#903FFF] before:rounded-full">
                  {t("frameComponent6_infrastructure_bullet2")}
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 w-[658px] max-xl:w-full max-md:h-full overflow-hidden">
            <div className="col-span-1  rounded-xl relative overflow-hidden">
              <img
                src="carmobile.png"
                alt=""
                className="w-full h-auto md:hidden"
              />
              <video
                className="rounded-xl w-full h-full max-md:hidden object-cover"
                src="04_GIGADriveHub_low_658x264_1.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute hidden max-md:hidden w-full bg-gradient-to-t from-[#8643F560] to-transparent z-50 h-[264px] top-0  rounded-xl overflow-hidden">
                <span className="text-white max-md:hidden absolute bottom-4 left-8  text-[55px] font-bold leading-[125%]">
                  {t("frameComponent6_title2")}
                </span>
              </div>
            </div>
            <span className="w-[518px] md:hidden max-xl:w-full text-[16px] font-normal text-left">
              Ein E-Mobilitäts Fahrzeug besteht hauptsächlich aus Batterie (40%
              des Wertes) und Conenctivität für die Kommunikation sowohl beim
              Fahren als auch beim Tanken. GIGA FIBER Technologies plant, eine
              Lithiummine zu erwerben und eine Fabrik zur Herstellung von
              Batterien und Funktürmen zu errichten. Diese Fabrik wird Batterien
              produzieren, die für die Stromversorgung von Funktürmen benötigt
              werden.
            </span>
            <div className="grid grid-cols-2 max-md:grid-cols-1  gap-4 col-span-1">
              <span className="w-full max-md:hidden">
                <img src="weather.png" alt="" className="w-full h-auto" />
              </span>
              <span className="w-full">
                <img
                  src="jars.png"
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </span>
              <span className="w-[518px] md:hidden max-xl:w-full text-[16px] font-normal text-left">
                <ul className="list-none">
                  <li className="relative pl-5 mb-2 before:absolute before:left-0 before:top-[25%] before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#903FFF] before:rounded-full">
                    Besonderes Interesse für europäische E-Auto Hersteller
                    aufgrund kostengünstiger Herstellungskosten für ein
                    Batteriewerk.
                  </li>
                  <li className="relative pl-5 mb-2 before:absolute before:left-0 before:top-[25%] before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#903FFF] before:rounded-full">
                    Entstehung von ca. 1000 neuer Arbeitsplätze in den Werken.
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <DropdownFaq
          question={t("frameComponent6_faq_question")}
          answer={
            <div className="bg-white rounded-3xl m-2 p-[40px] max-md:px-3">
              <p>
                {t("frameComponent6_faq_ans_part1")}
                <br />
                <br />
                {t("frameComponent6_faq_ans_part2")}
              </p>
              <div className="flex max-md:hidden flex-wrap justify-between mt-5">
                {imagedesData.map((data, index) => (
                  <Imagewithdiscription
                    key={index}
                    imageSrc={data.img}
                    text={data.text}
                  />
                ))}
              </div>
              <div className="flex flex-wrap md:hidden justify-between mt-5">
                <div>
                  <img className="w-full" src="R1.png" alt="Description" />
                  <div>
                    {imagedesData
                      .filter((_, index) => index % 2 === 0)
                      .map((data, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-baseline mt-3 mb-3"
                        >
                          <span className="w-2.5 h-2.5 bg-purple-600 rounded-full mr-2"></span>
                          <Imagewithdiscription2 text={data.text} />
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <img className="w-full" src="R6.png" alt="Description" />
                  <div>
                    {imagedesData
                      .filter((_, index) => index % 2 !== 0)
                      .map((data, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-baseline mt-3"
                        >
                          <span className="w-2.5 h-2.5 bg-purple-600 rounded-full mr-2"></span>
                          <Imagewithdiscription2 text={data.text} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
});

export default FrameComponent6;

export const Imagewithdiscription = ({ imageSrc, text, applyBg = true }) => {
  return (
    <>
      <div
        className={`w-[520px] max-xl:w-full h-[152px]  ${
          applyBg ? `bg-[#F5EEFF]` : "bg-[#903FFF]"
        } mt-3 rounded-3xl flex space-x-1`}
      >
        <div className="w-[185px] rounded-[8px]">
          <img
            src={imageSrc}
            alt=""
            className="w-[185px] h-[152px] rounded-[8px] object-cover"
          />
        </div>
        <p className="w-[365px] flex justify-center items-center">
          <span className="w-[90%] max-md:w-[100%]">{text}</span>
        </p>
      </div>
    </>
  );
};
export const Imagewithdiscription2 = ({ text }) => {
  return (
    <>
      <div
        className={`w-[520px] max-xl:w-full mt-1 rounded-3xl flex space-x-1`}
      >
        <p className="w-full flex justify-center items-center">
          <span className="w-[100%]">{text}</span>
        </p>
      </div>
    </>
  );
};
