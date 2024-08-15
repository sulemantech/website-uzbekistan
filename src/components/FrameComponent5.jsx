import React, { useState, forwardRef } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import DropdownFaq from "./SingleDropDown";
import { Imagewithdiscription } from "./FrameComponent6";
import { useTranslation } from 'react-i18next';

const FrameComponent5 = forwardRef((props, ref) => {
  const { t } = useTranslation(); // Initialize the translation function
  const [activeIndex, setActiveIndex] = useState(null);

  console.log("frameComponent5_q1_question:", t("frameComponent5_q1_question"));
  console.log("frameComponent5_q1_answer:", t("frameComponent5_q1_answer"));
  console.log("frameComponent5_title:", t("frameComponent5_title"));
  console.log("frameComponent5_intro:", t("frameComponent5_intro"));
  console.log("frameComponent5_potential:", t("frameComponent5_potential"));
  
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
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

  const divcontainer = (question, answer) => {
    return (
      <div>
        <span className="text-[#903fff] font-bold text-[16px] leading-[114%]">
          {question}
        </span>
        <br />
        {answer}
      </div>
    );
  };

  const imagedesData = [
    {
      img: "R11.png",
      text: divcontainer(
        t("frameComponent5_q1_question"),
        t("frameComponent5_q1_answer")
      ),
    },
    {
      img: "R15.png",
      text: divcontainer(
        t("frameComponent5_q2_question"),
        t("frameComponent5_q2_answer")
      ),
    },
    {
      img: "R12.png",
      text: divcontainer(
        t("frameComponent5_q3_question"),
        t("frameComponent5_q3_answer")
      ),
    },
    {
      img: "R16.png",
      text: divcontainer(
        t("frameComponent5_q4_question"),
        t("frameComponent5_q4_answer")
      ),
    },
    {
      img: "R13.png",
      text: divcontainer(
        t("frameComponent5_q5_question"),
        t("frameComponent5_q5_answer")
      ),
    },
    {
      img: "R17.png",
      text: divcontainer(
        t("frameComponent5_q1_question"),
        t("frameComponent5_q1_answer")
      ),
    },
    {
      img: "R14.png",
      text: divcontainer(
        t("frameComponent5_q2_question"),
        t("frameComponent5_q2_answer")
      ),
    },
    {
      img: "R18.png",
      text: divcontainer(
        (<div className="text-[34px] text-white">50%</div>),
        (<div className="text-white">
          {t("frameComponent5_q1_answer")}
        </div>)
      ),
    },
  ];

  return (
    <>
      <div ref={ref} className="bg-white rounded-2xl p-10 m-5">
        <div className="flex justify-between items-center max-w-[1500px] mx-auto space-x-10 rounded-2xl h-[580px] max-xl:flex-col max-xl:space-y-5 max-xl:space-x-0 max-xl:h-fit">
          <div className="flex flex-col space-y-7">
            <span className="flex space-x-6 text-5xl font-medium leading-[68px] text-[#903fff]">
              <p className="border-r-2 pr-3 border-[#903fff]">01</p>{" "}
              <p className="text-3xl w-[518px] max-xl:w-full font-bold">
                {t("frameComponent5_title")}
              </p>
            </span>
            <div className="w-[518px] max-xl:w-full text-[16px] font-normal text-left">
              {t("frameComponent5_intro")}
            </div>
            <div>
              <p className="text-3xl font-bold text-[#903fff] mb-3">
                {t("frameComponent5_potential")}
              </p>{" "}
              <div className="accordion w-[518px] max-xl:w-full">
                {questionsAndAnswers.map((item, index) => (
                  <div key={index} className="mb-2 p-1">
                    <div
                      className=" bg-white cursor-pointer border-b-2 border-[#903fff] text-lg font-medium relative overflow-hidden"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex justify-between items-center text-[#3d3a3a]">
                        <div>{item.question}</div>
                        <div>
                          {activeIndex === index ? (
                            <IconChevronUp color="#903fff" />
                          ) : (
                            <IconChevronDown />
                          )}
                        </div>
                      </div>
                      <div
                        className={` text-gray-400 ${
                          activeIndex === index
                            ? "max-h-[500px] opacity-100 p-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 w-[658px] max-xl:w-full h-[580px] overflow-hidden">
            <div className="col-span-1 h-[264px] rounded-xl relative overflow-hidden">
              <video
                className="rounded-xl w-full h-full object-cover"
                src="01screenvid.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute w-full bg-gradient-to-t from-[#3B2A89] to-transparent z-50 h-[264px] top-0  rounded-xl overflow-hidden">
                <span className="text-white absolute bottom-4 left-8 font-saira-condensed text-[55px] font-bold leading-[125%]">
                  {t("frameComponent4_card1_title")}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 h-[279px] max-xl:h-full gap-4 col-span-1">
              <span className="w-full h-full">
                <img
                  src="rock.png"
                  alt=""
                  className=" rounded-xl w-full h-full object-cover"
                />
              </span>
              <span className="w-full h-full">
                <img
                  src="machine.png"
                  alt=""
                  className="rounded-xl w-full h-full object-cover"
                />
              </span>
            </div>
          </div>
        </div>
        <DropdownFaq
          question={t("frameComponent5_q1_question")}
          answer={
            <div className="bg-white rounded-3xl m-2 p-[40px]">
              <p>{t("frameComponent5_q1_answer")}</p>
              <div className="flex flex-wrap justify-between mt-5">
                {imagedesData.map((data, index) => (
                  <Imagewithdiscription
                    key={index}
                    imageSrc={data.img}
                    applyBg={index === 7 ? false : true}
                    text={data.text}
                  />
                ))}
              </div>
            </div>
          }
        />
      </div>
    </>
  );
});

export default FrameComponent5;
