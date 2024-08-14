import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import DropdownFaq from "./SingleDropDown";

const FrameComponent6 = () => {
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
        <div className="flex space-x-10 rounded-2xl h-[580px]">
          <div className="grid grid-cols-1 gap-4 h-[580px] overflow-hidden">
            <div className="relative col-span-1 h-[264px] rounded-xl overflow-hidden">
              {/* <img src="01.png" alt="" className="w-full h-auto" /> */}
              <video
                className="rounded-xl"
                src="https://s3-figma-videos-production-sig.figma.com/video/1162680317508474349/TEAM/03b2/cfbd/-a72d-4de6-a877-0bf1f5ef7225?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z9PZZLlQYOajJcnfUGH7yH0pNUZXYkJP5gjVEyk4-OHMA~4IXSICksHwcN9bnPklfwQytAvZlhACPspybDzMys~TnoCNvfpFr9zks1bPzlE01GOtFLwJ0u9OHu0CbTp-Tq6j7-DVNi1UE4LQ7kcD3qagYsY2pr~lM--7emzg48i3QeCpcohAiVxAC2qXmntIxFL4ZW2sBGfWOU6EviLObvQaEzPz2W8MsRwF56Br7hG-uZXRjTTIEVroAInOogc-CWAzeOGiJRfW0n6uwe8wR-f-aoah2hIyBs2rNLoeXasM95EO582XetHYD9J~nnbx4gFF7WSQzKo4i0dx0jDxNA__"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute w-full bg-gradient-to-t from-[#903fff60] to-transparent z-50 h-[264px] top-0  rounded-xl overflow-hidden">
                <span className="text-white absolute bottom-4 left-8 font-saira-condensed text-[55px] font-bold leading-[125%]">
                  GIGA DRIVE HUB 
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 h-[279px] gap-4 col-span-1">
              <span className="w-full">
                <img src="d9.png" alt="" className="w-full h-auto" />
              </span>
              <span className="w-full">
                <img src="car.png" alt="" className="w-full h-auto" />
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-7">
            <span className="flex space-x-10 text-5xl font-medium leading-[68px] text-[#903fff]">
              <p className="border-r-2 px-3 border-[#903fff]">02</p>{" "}
              <p className="text-3xl font-bold">
                WIE UNTERSTÜTZEN WIR  DIE AUTOMOBILINDUSTRIE?​
              </p>
            </span>
            <div className="w-[518px] text-[16px] font-normal text-left">
              Autonomes Fahren zielt auf die Entwicklung von Fahrzeugen ab, die
              ohne menschliches Eingreifen fahren können. GIGA FIBER liefert die
              Technologie für Teststrecken für autonomes Fahren. Wir liefern dem
              internationalen Automobilmarkt Zugang zu Technik und
              Infrastruktur, um die Entwicklung autonomer Fahrzeuge weiter zu
              entwickeln und zu testen.
              <br />
              Forschung in diesem Themengebiet bietet nachhaltige
              Wettbewerbsvorteile und die Ausweitung der eigenen
              Automobilproduktion. Es entsteht eine 100 km Teststrecke für die
              Erforschung autonomer Fahrzeugsysteme.
              <br />
              <br />
              Die Technologie verspricht äußerst geringe Latenzzeiten  und hohe
              Datenübertragungsraten, wodurch es möglich ist, Fahrdaten nahezu
              in Echtzeit zu übertragen. Dies ist von besonderer Bedeutung für
              die Kommunikation zwischen Fahrzeugen und der Infrastruktur. 
              <br />
              Zudem kann die Latenz durch die Verarbeitung von Daten in der Nähe
              des Fahrzeugs, also am sogenannten „Edge“ des Netzwerks, weiter
              reduziert werden, da die Daten nicht erst an entfernte
              Rechenzentren gesendet werden müssen.
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-[90vw] mt-6 bg-[#8643F5] rounded-lg overflow-hidden h-[172px] flex justify-center items-center text-white font-saira-condensed text-[30px] font-bold leading-[107%] uppercase">
          <span className="w-[96%]">
            5G/6G Funkmasten von GIGA FIBER haben extrem niedrige Latenzzeiten
            und hohe Bandbreiten größer 1Bit/s. Flächendeckende und zuverlässige
            Netzabdeckung sowie eine hohe Netzwerkdichte, gewährleistet eine
            stabile Verbindung.
          </span>
        </div>

        <div className="flex space-x-10 mt-10 rounded-2xl h-[580px]">
          <div className="flex flex-col space-y-7">
            <span className=" text-5xl font-medium leading-[68px] text-[#903fff]">
              <p className="text-3xl font-bold">
                TOWER-INFRASTRUKTUR & Lithiumbatterieherstellung
              </p>
            </span>
            <div className="w-[518px] text-[16px] font-normal text-left">
              <span>
                Ein E-Mobilitäts Fahrzeug besteht hauptsächlich aus Batterie
                (40% des Wertes) und Conenctivität für die Kommunikation sowohl
                beim Fahren als auch beim Tanken. GIGA FIBER Technologies plant,
                eine Lithiummine zu erwerben und eine Fabrik zur Herstellung von
                Batterien und Funktürmen zu errichten. Diese Fabrik wird
                Batterien produzieren, die für die Stromversorgung von
                Funktürmen benötigt werden.
              </span>
              <ul className="list-none">
                <li className="relative pl-5 mb-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#903fff] before:rounded-full">
                  Besonderes Interesse für europäische E-Auto Hersteller
                  aufgrund kostengünstiger Herstellungskosten für ein
                  Batteriewerk.
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#903fff] before:rounded-full">
                  Entstehung von ca. 1000 neuer Arbeitsplätze in den Werken.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 h-[580px] overflow-hidden">
            <div className="col-span-1 h-[264px] rounded-xl relative overflow-hidden">
              {/* <img src="01.png" alt="" className="w-full h-auto" /> */}
              <video
                className="rounded-xl"
                src="https://s3-figma-videos-production-sig.figma.com/video/1162680317508474349/TEAM/f65a/b9b6/-80f2-48c1-ae3d-f36ba02b30d2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P7FiNGSjyvDg2rXuKRBJOApt9A0Z1HONjxuZyrw1J3hdvcm01hKebkKRHNKM5RLI21OGAd8~uhn13tzhKwn9s~hhXYvo8qV7IcjkWhlsSVLnQ4qaWdgbFNbFY~zXCcFF47gRgjW2ArnqVXw45jFFwlthYSZCKerNuKFT4RE4nftRg9ejJeeCR-e4UFS1S31mDfvQYh6zmEvQ~ZylgzK5afLseAQ-3IJZNpAYtjV7fuezlqQLZyuAux7~pJMZ2hMbp51F9vYPOPO6~VqCF-wmR5lWEGjyWvn2gKiMfrPDbk0PFckCIgJhC~KnPEoS8FetKWnDlPQbfiFwjJgzyog0Og__"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute w-full bg-gradient-to-t from-[#903fff60] to-transparent z-50 h-[264px] top-0  rounded-xl overflow-hidden">
                <span className="text-white absolute bottom-4 left-8 font-saira-condensed text-[55px] font-bold leading-[125%]">
                  CU29 TECH
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 h-[279px] gap-4 col-span-1">
              <span className="w-full">
                <img src="weather.png" alt="" className="w-full h-auto" />
              </span>
              <span className="w-full">
                <img src="jars.png" alt="" className="w-full h-auto" />
              </span>
            </div>
          </div>
        </div>
        <DropdownFaq
          question="Technologie & Infrastruktur Ziele der Zusammenarbeit mit GIGA FIBER"
          answer="ZIELE DER KOOPERATION MIT GIGA FIBER ZIELE DER KOOPERATION MIT GIGA FIBER ZIELE DER KOOPERATION MIT GIGA FIBER"
        />
      </div>
    </>
  );
};

export default FrameComponent6;
