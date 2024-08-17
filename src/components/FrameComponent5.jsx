import React, { useState, forwardRef } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import DropdownFaq from "./SingleDropDown";
import { Imagewithdiscription, Imagewithdiscription2 } from "./FrameComponent6";
import { useTranslation } from "react-i18next";

const FrameComponent5 = forwardRef((isMobile, ref) => {
  const { t } = useTranslation(); // Initialize the translation function
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const listItems = [
    t("frameComponent5_answers_investment_listItems_0"),
    t("frameComponent5_answers_investment_listItems_1"),
    t("frameComponent5_answers_investment_listItems_2"),
    t("frameComponent5_answers_investment_listItems_3"),
    t("frameComponent5_answers_investment_listItems_4"),
  ];
  const listItems2 = [
    t("frameComponent5_answers_economicImpact_listItems2_0"),
    t("frameComponent5_answers_economicImpact_listItems2_1"),
    t("frameComponent5_answers_economicImpact_listItems2_2"),
    t("frameComponent5_answers_economicImpact_listItems2_3"),
  ];
  const listItems3 = [
    t("frameComponent5_answers_internationalStandards_listItems3_0"),
    t("frameComponent5_answers_internationalStandards_listItems3_1"),
  ];
  const listItems4 = [
    t("frameComponent5_answers_jobCreation_listItems4_0"),
    t("frameComponent5_answers_jobCreation_listItems4_1"),
    t("frameComponent5_answers_jobCreation_listItems4_2"),
  ];

  const ListComponent = ({ items }) => (
    <ul className="list-none">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative pl-5 mb-2 before:absolute before:left-0 before:top-[25%] before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#8643F5] before:rounded-full"
        >
          {item}
        </li>
      ))}
    </ul>
  );

  const questionsAndAnswers = [
    {
      question: t("frameComponent5_questions_investment"),
      answer: <ListComponent items={listItems} />,
    },
    {
      question: t("frameComponent5_questions_economicImpact"),
      answer: <ListComponent items={listItems2} />,
    },
    {
      question: t("frameComponent5_questions_internationalStandards"),
      answer: <ListComponent items={listItems3} />,
    },
    {
      question: t("frameComponent5_questions_jobCreation"),
      answer: <ListComponent items={listItems4} />,
    },
  ];

  const divcontainer = (question, answer) => {
    return (
      <div>
        <span className="text-[#8643F5] font-extrabold text-[16px] leading-[114%]">
          {question}
        </span>
        <br />
        <span className="text-[16px] font-medium">{answer}</span>
      </div>
    );
  };

  // const imagedesData = [
  //   {
  //     img: "R11.png",
  //     text: divcontainer(
  //       t("frameComponent5_q1_question"),
  //       t("frameComponent5_q1_answer")
  //     ),
  //   },
  //   {
  //     img: "R15.png",
  //     text: divcontainer(
  //       t("frameComponent5_q2_question"),
  //       t("frameComponent5_q2_answer")
  //     ),
  //   },
  //   {
  //     img: "R12.png",
  //     text: divcontainer(
  //       t("frameComponent5_q3_question"),
  //       t("frameComponent5_q3_answer")
  //     ),
  //   },
  //   {
  //     img: "R16.png",
  //     text: divcontainer(
  //       t("frameComponent5_q4_question"),
  //       t("frameComponent5_q4_answer")
  //     ),
  //   },
  //   {
  //     img: "R13.png",
  //     text: divcontainer(
  //       t("frameComponent5_q5_question"),
  //       t("frameComponent5_q5_answer")
  //     ),
  //   },
  //   {
  //     img: "R17.png",
  //     text: divcontainer(
  //       t("frameComponent5_q1_question"),
  //       t("frameComponent5_q1_answer")
  //     ),
  //   },
  //   {
  //     img: "R14.png",
  //     text: divcontainer(
  //       t("frameComponent5_q2_question"),
  //       t("frameComponent5_q2_answer")
  //     ),
  //   },
  //   {
  //     img: "R18.png",
  //     text: divcontainer(
  //       (<div className="text-[34px] text-white">50%</div>),
  //       (<div className="text-white">
  //         {t("frameComponent5_q1_answer")}
  //       </div>)
  //     ),
  //   },
  // ];

  const imagedesData = [
    {
      img: "R11.png",
      text: divcontainer(
        t("frameComponent5_imageDescriptions_1_title"),
        t("frameComponent5_imageDescriptions_1_text")
      ),
    },
    {
      img: "R15.png",
      text: divcontainer(
        t("frameComponent5_imageDescriptions_2_title"),
        t("frameComponent5_imageDescriptions_2_text")
      ),
    },
    {
      img: "R12.png",
      text: divcontainer(
        t("frameComponent5_imageDescriptions_3_title"),
        t("frameComponent5_imageDescriptions_3_text")
      ),
    },
    {
      img: "R16.png",
      text: divcontainer(
        t("frameComponent5_imageDescriptions_4_title"),
        t("frameComponent5_imageDescriptions_4_text")
      ),
    },
    {
      img: "R13.png",
      text: divcontainer(
        t("frameComponent5_imageDescriptions_5_title"),
        t("frameComponent5_imageDescriptions_5_text")
      ),
    },
    {
      img: "R17.png",
      text: divcontainer(
        t("frameComponent5_imageDescriptions_6_title"),
        t("frameComponent5_imageDescriptions_6_text")
      ),
    },
    {
      img: "R14.png",
      text: divcontainer(
        t("frameComponent5_imageDescriptions_7_title"),
        t("frameComponent5_imageDescriptions_7_text")
      ),
    },
    {
      img: "R18.png",
      text: divcontainer(
        <div className="text-[34px] text-white">50%</div>,
        <div className="text-white">
          {t("frameComponent5_imageDescriptions_8_text")}
        </div>
      ),
    },
  ];
  return (
    <>
      <div ref={ref} className="bg-white rounded-22xl p-10 m-5 max-md:m-1">
        <div className="flex justify-between max-w-[1500px] mx-auto space-x-10 rounded-2xl max-xl:flex-col max-xl:space-y-5 max-xl:space-x-0 max-xl:h-fit">
          <div className="flex flex-col space-y-7">
            <span className="flex max-md:hidden space-x-6 text-5xl font-medium leading-[68px] text-[#8643F5]">
              <p className="border-r-2 pr-3 border-[#8643F5]">01</p>{" "}
              <p className="text-3xl w-[518px] max-xl:w-full font-bold">
                {t("frameComponent5_title")}
              </p>
            </span>
            <div className="w-[518px] max-xl:w-full text-[16px] font-normal text-left">
              {t("frameComponent5_intro")}
            </div>
            <div>
              <p className="text-3xl font-bold text-[#8643F5] mb-3">
                {t("frameComponent5_potential")}
              </p>{" "}
              <div className="accordion font-saira w-[518px] max-xl:w-full">
                {questionsAndAnswers.map((item, index) => (
                  <div key={index} className="mb-2 p-1">
                    <div
                      className=" bg-white cursor-pointer border-b-2 border-[#8643F5] text-lg font-medium relative overflow-hidden"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex justify-between text-base  items-center text-[#3d3a3a]">
                        <div>{item.question}</div>
                        <div
                          className={`transition-transform ${
                            activeIndex === index ? "rotate-0" : "-rotate-180"
                          }`}
                        >
                          <IconChevronUp color="#8643F5" />
                        </div>
                      </div>
                      <div
                        className={`font-normal text-sm text-gray-400 ${
                          activeIndex === index
                            ? " opacity-100 p-2"
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
          <div className="grid grid-cols-1 max-md:hidden h-fit gap-4 w-[658px] max-xl:w-full overflow-hidden">
            <div className="col-span-1  rounded-xl relative overflow-hidden">
              <video
                className="rounded-xl w-full h-full object-cover"
                src="01screenvid.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute w-full bg-gradient-to-t from-[#3B2A89] to-transparent z-50 top-0  rounded-xl overflow-hidden">
                <span className="text-white absolute bottom-4 left-8  text-[55px] font-bold leading-[125%]">
                  {t("frameComponent4_card1_title")}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 max-xl:h-full gap-4 col-span-1">
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
          question={t("frameComponent5_faq_question_gigaFiberPartnership")}
          answer={
            <div>
              <div className="bg-white max-md:bg-[#F5EEFF] rounded-3xl m-3 max-md:m-0 p-[40px] max-md:px-5">
                <p>{t("frameComponent5_faq_answer_gigaFiberPartnership")}</p>
                <div className="flex flex-wrap max-md:hidden justify-between mt-5">
                  {isMobile &&
                    imagedesData.map((data, index) => (
                      <Imagewithdiscription
                        key={index}
                        imageSrc={data.img}
                        applyBg={index == "7" ? false : true}
                        text={data.text}
                      />
                    ))}
                </div>
                <div className="flex flex-wrap md:hidden justify-between mt-5">
                  <div>
                    <img className="w-full mb-3 mt-3" src="R11.png" alt="Description" />
                    <div>
                      {imagedesData.slice(0, 4).map((data, index) => (
                        <Imagewithdiscription2 key={index} text={data.text} />
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <img className="w-full mb-3 mt-3" src="R16.png" alt="Description" />
                    <div>
                      {imagedesData.slice(4, 7).map((data, index) => (
                        <Imagewithdiscription2 key={index} text={data.text} />
                      ))}
                    </div>
                    <div
                      className={`w-[520px] max-xl:w-full h-[152px]  mt-3 rounded-3xl flex space-x-1`}
                    >
                      <p className="w-full flex justify-center items-center">
                        <span className="w-[90%]">
                          <div className="text-[34px] text-[#8643F5] w-[50%] mb-4 border-t-2 border-[#8643F5]"></div>
                          <div className="text-[34px] font-extrabold text-[#8643F5] mb-5">
                            50%
                          </div>
                          <div className="text-black">
                            {t(
                              "des erwirtschafteten Profits werden in die Teststrecke autonomes Fahren investiert."
                            )}
                          </div>
                        </span>
                      </p>
                    </div>
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

export default FrameComponent5;
