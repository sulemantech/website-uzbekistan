import React, { useRef, useState } from "react";
import DropdownFaq from "./SingleDropDown";
const FrameComponent7 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  const sectionData = [
    {
      title: "Hospitality & Hotels",
      imageSrc: "tree.png",
      points: [
        "Umsatzsteigerung durch gezielte Ansprache spezifischer Zielgruppen.",
        "WIFI und Kontextintensive Ansprachen der Kunden, local-based",
        "Erhöhung der Buchungsraten aufgrund von positivem Kundenerlebnis",
      ],
    },
    {
      title: "Discounter & Malls",
      imageSrc: "Dhouse.png",
      points: [
        "Schaffung neuer Wirtschaftszweige im Technologie-Bereich, was zu erhöhter Innovation führt.",
        "Transparenz des Konsumentenverhaltens dank local-based Technologie und Indoor GPS.",
        "Umsatzsteigerung durch gezielte Ansprache spezifischer Zielgruppen.",
      ],
    },
  ];
  const sectionDataDropdown = [
    {
      title2: "Optimierung der Kundenerfahrung",
      imageSrc: "Rectangle 16.png",
      points: [
        "Unterstützung lokaler Unternehmen durch Zugang zu nationalen und internationalen Märkten.",
        "Förderung der wirtschaftlichen Diversifikation und Exportsteigerung durch neue Partnerschaften.",
        "Schaffung neuer Wirtschaftszweige im Technologie-Bereich, was zu erhöhter Innovationskraft führt.",
      ],
    },
    {
      title2: "Discounter & Malls",
      imageSrc: "rectangle17.png",
      points: [
        "Durch die Geräte-unabhängigkeit und den Schutz der Privatsphäre verbessert GIGA FIBER Connectivity das Nutzererlebnis.",
        "Ziel ist die direkte Datenerfassung und Analyse des Konsum- und Besucherverhaltens mit Hilfe von local-based Technologie und Indoor GPS",
        "Erhöht die Umsätze",
      ],
    },
  ];
  return (
    <>
      <div className="bg-white  flex flex-col items-center rounded-2xl p-10 m-5 ">
        <div className="flex space-x-10 max-w-[1500px] rounded-2xl max-xl:flex-col max-xl:space-y-5 max-xl:space-x-0 max-xl:h-fit">
          <div className="flex flex-col space-y-4">
            <span className="flex space-x-10 text-5xl font-medium leading-[68px] text-[#903fff]">
              <p className="border-r-2 px-3 border-[#903fff]">03</p>{" "}
              <p className="text-3xl font-bold">
                WIE FÖRDERN WIR WACHSTUM  UND DIGITALE INTEGRATION?​
              </p>
            </span>
            <div className="w-[518px] max-xl:w-full text-[16px] font-normal text-left">
              Die bisherigen Projekte – der Abbau von Kupfer und Lithium sowie
              der Bau einer autonomen Teststrecke – setzen bedeutende
              wirtschaftliche Impulse in Usbekistan. Sie schaffen nicht nur
              Arbeitsplätze, sondern tragen auch zur gesellschaftlichen
              Entwicklung bei und bilden die Grundlage für eine nachhaltige
              wirtschaftliche Entwicklung.  <br />
              Diese Fortschritte legen das Fundament für unser neues Vorhaben:
              GIGA FIBER Connectivity. Mithilfe der in den Minen gewonnenen
              Kupfer- und Lithiumressourcen sowie der bestehenden
              5G/6G-Infrastruktur zielt dieses Projekt darauf ab, die digitale
              Transformation des Landes weiter zu fördern.
            </div>
          </div>

          <div className="grid grid-cols-1  gap-4 overflow-hidden">
            <div className="col-span-1 h-[264px] rounded-xl relative overflow-hidden">
              {/* <img src="01.png" alt="" className="w-full h-auto" /> */}
              <video
                className="rounded-xl w-full h-full object-cover"
                src="03vid.mov"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <div className="absolute w-full bg-gradient-to-t from-[#903fff60] to-transparent z-50 h-[264px] top-0  rounded-xl overflow-hidden">
                <span className="text-white absolute  bottom-4 left-8 font-saira-condensed text-[55px] font-bold leading-[125%]">
                  GIGA FUTURE
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl mt-10  my-2 font-bold text-[#903fff] border-[#903fff] uppercase">
            GIGA FIBER Connectivity
          </p>
          <p className="text-black max-w-[1500px]  mt-6 mb-2 text-[16px] font-normal leading-[1.25]">
            GIGA FIBER Connectivity ist ein umfassendes Projekt, welches auf den
            Aufbau und die Erweiterung digitaler Infrastrukturen abzielt. Es
            schafft Schnittstellen für den Einzelhandel, die kontextsensitive
            Werbung, digitale Zahlungen und optimierte Kommunikation
            ermöglichen, um den Konsum und die wirtschaftliche Aktivität in
            Usbekistan zu steigern. <br />
            <br />
            Die Geschäftsidee von GIGA FIBER Connectivity hat sich bereits in
            verschiedenen Projekten in der EU erfolgreich bewährt. Beispiele
            dafür sind:
          </p>
        </div>

        <div className="flex justify-between w-[90vw] max-xl:w-full max-xl:flex-col max-w-[1500px] items-center space-x-10 max-xl:space-x-0 relative">
          <div className="flex items-end h-[450px] max-xl:h-fit justify-center bottom-0  space-x-2">
            <img className="w-[71px] h-[49px]" src="db.png" alt="" />
            <img className="w-[263px] h-[46px]" src="lufthansa.png" alt="" />
          </div>{" "}
          <div>
            {" "}
            <div className="flex justify-center items-center mt-10">
              <div className="relative flex justify-center items-center">
                <video
                  ref={videoRef}
                  className=" rounded-xl w-full h-full object-cover"
                  width="100%"
                  height="450px"
                  autoPlay
                  loop
                  muted={isMuted}
                >
                  <source
                    src="https://s3-figma-videos-production-sig.figma.com/video/1162680317508474349/TEAM/b8be/b0c2/-eeee-4eea-a39f-95f297674bb3?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oz31lVoqnvlhJVVwENHzG-CU9skXVh8uvxrIqRd6~xNLNospdMYLudQT8WmiVCqWexwAfrkf0SPEgp-8iso7mkbUs4-53bMA5xkMPplOTgiQFNz8sudbYkCAtUs7p0QxYIs~apjR27MuNwaOSggPeP~krgGW2DgNCXu4WcCdrTDUpPd~7NKn12A5lS0fVepWihScJrW21FI60XChNz9ztp6-ljK3JNK1UwWYTwenZySxcYnOD79Fmo2imgvbCXZ7rowAG0WlWvqyhHjP-E2DVAcMS1YQdGcm9LjVh4lSQh4YnUNMfSjhmXtlWZll51pv7NbcxZGXTgun69KPOgQxZA__"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-6 right-8 flex space-x-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlayPause}
                    className=" text-white p-2  rounded-full"
                  >
                    {isPlaying ? (
                      <img className="w-7 h-7" src="Play Pause.svg" alt="" />
                    ) : (
                      <img className="w-7 h-7" src="play.svg" alt="play" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className=" text-white p-2 rounded-full"
                  >
                    {isMuted ? (
                      <img src="Sound on off.svg" alt="" srcset="" />
                    ) : (
                      <img src="sound-on.svg" alt="" srcset="" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 max-w-[1500px] justify-between w-full my-6">
          {sectionData.map((data, index) => (
            <Section
              key={index}
              title={data.title}
              imageSrc={data.imageSrc}
              points={data.points}
            />
          ))}
        </div>
        

        <DropdownFaq
          question="VORTEILE & ZIELE"
          answer={
            <div className="bg-white rounded-3xl m-2 p-[40px]">
              <p>
                Dieses Projekt trägt maßgeblich zur digitalen Transformation
                Usbekistans bei und stellt sicher, dass der Wohlstandszuwachs
                aus den Rohstoffprojekten nachhaltig in den Aufbau einer
                modernen und vernetzten Wirtschaft investiert wird. <br /><br /> Durch die
                vorherigen Projekte gewonnene Kaufkraft wird landesweit
                unterstützt. GIGA FIBER Connectivity schafft eine Plattform für
                gezielte Marketingstrategien und stärkt die finanzielle
                Inklusion durch digitale Zahlungen.
              </p>
              <p className="flex space-x-10 max-w-[1500px] justify-between w-full my-6">
                {sectionDataDropdown.map((data, index) => (
                  <Section
                    key={index}
                    title2={data.title2}
                    imageSrc={data.imageSrc}
                    points={data.points}
                  />
                ))}
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};

export default FrameComponent7;

const Section = ({ title, title2 = null, imageSrc, points }) => {
  return (
    <div className="w-[50%] rounded-xl z-50 bg-gradient-to-t from-[#903fff30] to-transparent">
      <div className="col-span-1 h-[264px] rounded-xl relative overflow-hidden">
        <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        <div className="absolute w-full bg-gradient-to-t from-[#271C5BAA] to-transparent z-50 h-[264px] top-0 rounded-xl overflow-hidden">
          <span className="text-white absolute bottom-2 left-8 font-saira-condensed text-[30px] font-bold leading-[125%]">
            {title}
          </span>
        </div>
      </div>
      <span className="text-[#903fff] ml-[39px] font-saira-condensed text-[16px] font-bold leading-[314%]">
        {title2}
      </span>
      <ul className="list-none w-[70%] mx-3 my-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="relative pl-5 mb-2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#903fff] before:rounded-full"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
