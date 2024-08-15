import React, { useRef } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";

const Gigafibertechcom = () => {
  const frame4Ref = useRef(null);
  const frame5Ref = useRef(null);
  const frame6Ref = useRef(null);
  const frame7Ref = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full [background:linear-gradient(180deg,_#281d57,_#1e1a2e)] font-saira-condensed">
      <Header scrollToFrame4={() => scrollToRef(frame4Ref)} />
      <FrameComponent3 />
      <FrameComponent4
        ref={frame4Ref}
        scrollToFrame5={() => scrollToRef(frame5Ref)}
        scrollToFrame6={() => scrollToRef(frame6Ref)}
        scrollToFrame7={() => scrollToRef(frame7Ref)}
      />
      <FrameComponent5 ref={frame5Ref} />
      <FrameComponent6 ref={frame6Ref} />
      <FrameComponent7 ref={frame7Ref} />
      <Footer />
    </div>
  );
};

export default Gigafibertechcom;
