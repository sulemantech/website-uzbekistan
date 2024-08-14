import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const DropdownFaq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[90vw] bg-[#8643F5] mt-6 rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-white font-bold text-[30px]">{question}</div>
        <div>
          <img
            className={`${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform`}
            src="objects3.svg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#8643f5] text-black p-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownFaq;
