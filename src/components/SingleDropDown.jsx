import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const DropdownFaq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-[1500px] font-saira mx-auto bg-[#8643F5] mt-[21px] md:mt-[61px] rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center mx-4 p-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-white font-bold text-[20px] sm:text-[30px]">{question}</div>
        <div>
          <img
            className={`w-[23px] h-[20px] ${
              isOpen ? "-rotate-90" : "rotate-0"
            } transition-transform`}
            src="objects3.svg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#8643f5] text-base font-normal leading-[125%] text-black p-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownFaq;
