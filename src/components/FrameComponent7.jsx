import React, { useRef, useState, forwardRef } from "react";
import DropdownFaq from "./SingleDropDown";
import { useTranslation } from 'react-i18next';
import Wrapper from "./Wrapper";

const FrameComponent7 = forwardRef((props, ref) => {
  const { t } = useTranslation();
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
      title: t("frameComponent7_sectionData_1_title"),
      imageSrc: "tree.png",
      points: [
      t("frameComponent7_sectionData_1_points_1"),
      t("frameComponent7_sectionData_1_points_2"),
      t("frameComponent7_sectionData_1_points_3")
      ],
    },
    {
      title: t("frameComponent7_sectionData_2_title"),
      imageSrc: "Dhouse.png",
      points: [
       t("frameComponent7_sectionData_2_points_1"),
       t("frameComponent7_sectionData_2_points_2"),
       t("frameComponent7_sectionData_2_points_3"),
    
      ],
    },
  ];
  const sectionDataDropdown = [
    {
      title2: t("frameComponent7_sectionDataDropdown_1_title2"),
      imageSrc: "R2.png",
      points: [
        t("frameComponent7_sectionDataDropdown_1_points_1"),
      t("frameComponent7_sectionDataDropdown_1_points_2"),
      t("frameComponent7_sectionDataDropdown_1_points_3")
    ]
    },
    {
      title2: t("frameComponent7_sectionDataDropdown_2_title2"),
      imageSrc: "rectangle17.png",
      points: [
       t("frameComponent7_sectionDataDropdown_2_points_1"),
       t("frameComponent7_sectionDataDropdown_2_points_2"),
       t("frameComponent7_sectionDataDropdown_2_points_3"),
      ],
    },
  ];
  return (
    <>
      <Wrapper ref={ref}
      >
        <div className="flex justify-between w-full space-x-10 max-w-[1500px] rounded-2xl max-xl:flex-col max-xl:space-y-5 max-xl:space-x-0 max-xl:h-fit">
          <div className="flex flex-col w-full space-y-4">
            <span className="flex space-x-10 text-[55px] font-medium leading-[68px] text-[#903FFF]  max-md:hidden">
              <p className="border-r-2 px-3 border-[#903FFF]">03</p>{" "}
              <p className="text-3xl font-bold whitespace-pre-line">
                {t("frameComponent7_title")}
              </p>
            </span>
            <div className="min-w-[518px] max-xl:w-full xl:w-[518px] text-[16px] font-normal font-saira text-left  whitespace-pre-line">
             {t("frameComponent7_intro")}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 w-[658px] max-xl:w-full xl:w-full max-xl:h-full xl:max-h-[574px] laptop:max-w-[658px] xl:h-[540px]">
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
              <div className="absolute w-full bg-gradient-to-t from-[#8643F560] to-transparent z-50 h-[264px] top-0 rounded-xl overflow-hidden">
                <span className="text-white absolute  bottom-2 md:bottom-4 left-6 md:left-8  text-[35px] md:text-[55px] font-bold leading-[125%]">
                  GIGA FUTURE
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl mt-10  my-2 font-bold text-[#903FFF] border-[#903FFF] uppercase">
            {t("frameComponent7_title2")}
          </p>
          <p className="text-black max-w-[1500px]  mt-6 mb-2 text-[16px] font-normal font-saira leading-[1.25]">
            {t("frameComponent7_intro2_part1")}
            <br />
            <br />
            {t("frameComponent7_intro2_part2")}
          </p>
        </div>

        <div className="flex justify-between w-[90vw] max-xl:w-full max-xl:flex-col max-w-[1500px] items-center space-x-10 max-xl:space-x-0 relative">
          <div className="flex w-[100%] md:w-auto items-end h-[450px] max-xl:h-fit justify-start bottom-0  space-x-4 mt-2">
            <img className="w-[38px] md:w-[71px] h-[25px] md:h-[49px]" src="db.png" alt="" />
            <img className="w-[140px] md:w-[263px] h-[22px] md:h-[46px]" src="lufthansa.png" alt="" />
          </div>{" "}
          <div>
            {" "}
            <div className="flex justify-center items-center mt-5 md-mt-10">
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
                    src="06_German_GIGAFuture_DB_low_892x450_1.mp4"
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
                      <img src="Sound on off.svg" alt="" srcSet="" />
                    ) : (
                      <img src="sound-on.svg" alt="" srcSet="" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap space-y-10 md:space-y-0 md:space-x-10 max-w-[1500px] justify-between w-full my-6">
          {sectionData.map((data, index) => (
            <Section
              key={index}
              title={data.title}
              imageSrc={data.imageSrc}
              points={data.points}
            />
          ))}
        </div>
        <p className="font-saira text-[16px] leading-[125%]">Diese Erfolge demonstrieren das Potenzial von GIGA FIBER Connectivity, wirtschaftliche Vorteile zu erzielen und die Kundenzufriedenheit in verschiedenen Branchen zu steigern. Die Technologie ist vielseitig einsetzbar und trägt maßgeblich zur Effizienzsteigerung und Umsatzverbesserung bei.</p>

        <DropdownFaq
          question={t("frameComponent7_dropdown_title")}
          answer={
            <div className="bg-white rounded-3xl m-2 p-[25px] md:p-[40px]">
              <p>
                {t("frameComponent7_dropdown_intro_part1")} <br /><br /> Durch die
                {t("frameComponent7_dropdown_intro_part2")}
              </p>
              <p className="flex flex-wrap md:flex-nowrap md:space-x-10 max-w-[1500px] justify-between w-full my-6">
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
      </Wrapper>
    </>
  );
});

export default FrameComponent7;

const Section = ({ title, title2 = null, imageSrc, points }) => {
  return (
    <div className="w-[100%] md:w-[50%] rounded-xl z-50 bg-gradient-to-t bg-white md:from-[#8643F530] to-transparent space-y-3">
      <span className="text-[#903FFF] hidden max-md:block  text-[22px] font-bold leading-[125%]">
            {title}
          </span>
      <div className="col-span-1 h-[165px] md:h-[264px] rounded-xl relative overflow-hidden">
        <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        <div className={`absolute w-full ${title ? "bg-gradient-to-t from-[#271C5BAA] to-transparent" : ""} z-50 h-[264px] top-0 rounded-xl overflow-hidden`}>
          <span className="text-white absolute bottom-5 left-9  text-[38px] font-bold leading-[125%]">
            {title}
          </span>
        </div>
      </div>
      {title2 && (
        <div className="mt-4 md:ml-[39px]">
          <span className="flex justify-start w-full text-[#903FFF] font-saira text-base font-bold">
            {title2}
          </span>
        </div>
      )}
      <ul
        className={`list-none w-[90%] font-saira h-fit ${
          !title2 && "mt-[46px] mb-[54px]"
        } md:ml-[39px]`}
      >
        {points.map((point, index) => (
          <li
            key={index}
            className="relative pl-5 mb-2 last:mb-4 before:absolute before:left-0 before:top-[25%] before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#903FFF] before:rounded-full"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
