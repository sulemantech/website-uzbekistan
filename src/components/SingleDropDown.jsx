import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const DropdownFaq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto max-md:bg-transparent md:bg-[#8643F5]  mt-[21px] md:mt-[61px] rounded-[14px] overflow-hidden">
      <div
        className="flex justify-between items-center mx-auto p-4 max-md:rounded-lg max-md:w-[100%] max-md:bg-[#8643F5] cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-white font-bold  text-[30px] leading-[125%] bg-transparent mx-[30px]  max-md:text-sm">{question}</div>
        <div className=" bg-transparent">
          <img
            className={`scale-95 mx-[30px] ${
              isOpen ? "-rotate-90" : "rotate-0"
            } transition-transform`}
            src="objects3.svg"
            alt=""
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:bg-[#8643f5] mx-[30px] mb-[30px] font-saira whitespace-pre-line max-md:bg-transparent text-base font-normal leading-[125%] text-black pt-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownFaq;
