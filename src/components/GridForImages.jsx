import React from "react";

const GridForImages = ({ videoSrc, videoTitle, imageSrc1, imageSrc2, content, listItems }) => {
  return (
    <div className="grid grid-cols-1 gap-8 w-[658px] max-xl:w-full xl:w-full max-xl:h-full xl:max-h-[574px] laptop:max-w-[658px] xl:h-[540px]">
      <div className="col-span-1 rounded-xl relative overflow-hidden h-[264px] max-xl:h-auto laptop:max-h-[279px]">
        <video
          className="rounded-[14px] w-full h-full max-md:hidden object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className={`absolute max-md:hidden ${!videoTitle && "hidden"} w-full bg-gradient-to-t from-[#8643F560] to-transparent z-50 h-full top-0 rounded-xl overflow-hidden`}>
          <span className="text-white absolute bottom-4 left-8 text-[55px] font-bold leading-[125%]">
            {videoTitle}
          </span>
        </div>
      </div>
      {content && (
        <span className="w-[518px] md:hidden max-xl:w-full text-[16px] font-normal text-left">
          {content}
        </span>
      )}
      {listItems && (
        <ul className="list-none w-[518px] md:hidden max-xl:w-full text-[16px] font-normal text-left">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="relative pl-5 mb-2 before:absolute before:left-0 before:top-[25%] before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#903FFF] before:rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="grid grid-cols-2 xl:max-h-[279px]  max-md:grid-cols-1 gap-7 col-span-1">
        <span className="w-full">
          <img
            src={imageSrc1}
            alt=""
            className="w-full h-full rounded-[14px] object-cover"
          />
        </span>
        <span className="w-full">
          <img
            src={imageSrc2}
            alt=""
            className="w-full h-full rounded-[14px] object-cover"
          />
        </span>
      </div>
    </div>
  );
};

export default GridForImages;
