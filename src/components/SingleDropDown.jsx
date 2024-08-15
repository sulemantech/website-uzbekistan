import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const DropdownFaq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-[1500px] font-saira mx-auto bg-[#8643F5] mt-[61px] rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center mx-4 p-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-white font-bold text-[30px] font-SairaCondensed">{question}</div>
        <div>
          <img
            className={`${
              isOpen ? "-rotate-90" : "rotate-90"
            } transition-transform`}
            src="objects3.svg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#8643f5] text-base font-normal leading-[125%] text-black p-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownFaq;
