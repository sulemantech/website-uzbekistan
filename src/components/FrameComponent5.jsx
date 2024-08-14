import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import DropdownFaq from "./SingleDropDown";

const FrameComponent5 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const questionsAndAnswers = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all items. Please ensure that the items are in their original packaging and condition. For more details, visit our returns page.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location. Typically, domestic orders take 3-5 business days, while international orders can take 7-14 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping costs and delivery times will be calculated at checkout based on your location.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "If you need to make changes to your order, please contact us as soon as possible. We can only make changes if the order has not yet been processed or shipped.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive a tracking number via email. You can use this tracking number to check the status of your order on our shipping partner's website.",
    },
  ];

  return (
    <>
      <div className="bg-white rounded-2xl p-10 m-5">
        <div className="flex justify-between items-center max-w-[1500px] mx-auto space-x-10 rounded-2xl h-[580px]">
          <div className="flex flex-col space-y-7">
            <span className="flex space-x-6 text-5xl font-medium leading-[68px] text-[#903fff]">
              <p className="border-r-2 pr-3 border-[#903fff]">01</p>{" "}
              <p className="text-3xl w-[518px] font-bold">
                WIE STEIGERN ​WIR DIE REGIONALE  WIRTSCHAFTSKRAFT?​
              </p>
            </span>
            <div className="w-[518px] text-[16px] font-normal text-left">
              Moderne Bergbautechnologien sowie fortschrittliche Methoden im
              Abbau, Digitalisierung, Energieeffizienz und Arbeitsschutz sind
              zentrale Bestandteile des Projekts. 
              <br /> Zudem liegt ein Schwerpunkt auf der Aus- und Weiterbildung
              von Fachkräften, im Bergbau. Dies stärkt die regionale Wirtschaft
              erheblich durch die Erhöhung des Produktionsvolumens von Lithium
              und Kupfererzeugnissen für den Export und nationale Industrie.
            </div>
            <div>
              <p className="text-3xl font-bold text-[#903fff] mb-3">
                POTENZIAL FÜR DIE REGION
              </p>{" "}
              <div className="accordion w-[518px]">
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
          <div className="grid grid-cols-1 gap-4 max-w-[658px] h-[580px] overflow-hidden">
            <div className="col-span-1 h-[264px] rounded-xl relative overflow-hidden">
              {/* <img src="01.png" alt="" className="w-full h-auto" /> */}
              <video
                className="rounded-xl"
                src="https://s3-figma-videos-production-sig.figma.com/video/1162680317508474349/TEAM/c1e9/7c07/-88e2-41b5-bd00-31430518b95d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERo3ruKVOh13Ag~mmS4bN9mTVc7RABHbAb~fdz9t7s5UhQ2ORPVFJpFDrBxcNkoDOglL33IGwGooAQ~t9nQYYKjZ~dnKyHzlYvZfym2-PtWJQizb1XIwgOm~zKRxzLceJSADgsfKylxEAgtgbKAzROULUd~eWx4WJQyGrCCFVOjDMVxscu4pMJuBa2iHOz-xAvLPdKMh8icK2utrhDrfBXhY-KsoCpUyw~vGftR~is8OV4U9Cr3IlSCO8gneMoa0whDoeFGpdQS0RxO2SsllTAvSAxmHLnd0x-a53SBHcdj13NvhY9RzEfnt3n5yWUZ5FR0MBWGkX1EfEy5shFx92A__"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute w-full bg-gradient-to-t from-[#3B2A89] to-transparent z-50 h-[264px] top-0  rounded-xl overflow-hidden">
                <span className="text-white absolute bottom-4 left-8 font-saira-condensed text-[55px] font-bold leading-[125%]">
                CU29 TECH
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 h-[279px] gap-4 col-span-1">
              <span className="w-full">
                <img src="rock.png" alt="" className="w-full h-full" />
              </span>
              <span className="w-full">
                <img src="machine.png" alt="" className="w-full h-full" />
              </span>
            </div>
          </div>
        </div>
        <DropdownFaq
          question="ZIELE DER KOOPERATION MIT GIGA FIBER"
          answer="ZIELE DER KOOPERATION MIT GIGA FIBER ZIELE DER KOOPERATION MIT GIGA FIBER ZIELE DER KOOPERATION MIT GIGA FIBER"
        />
      </div>
    </>
  );
};

export default FrameComponent5;
