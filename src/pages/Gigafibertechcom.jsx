import React, { useRef, useState } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";

// Custom hook to check if screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

const Gigafibertechcom = () => {
  const isMobile = useIsMobile();
  const frame4Ref = useRef(null);
  const frame5Ref = useRef(null);
  const frame6Ref = useRef(null);
  const frame7Ref = useRef(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="w-full [background:linear-gradient(180deg,_#281d57,_#1e1a2e)] font-saira-condensed">
      <Header
        scrollToFrame4={() => scrollToRef(frame4Ref)}
        setActiveComponent={handleComponentClick}
      />
      <FrameComponent3 />

      {isMobile && !activeComponent && (
        <FrameComponent4
          ref={frame4Ref}
          scrollToFrame5={() => handleComponentClick("frame5")}
          scrollToFrame6={() => handleComponentClick("frame6")}
          scrollToFrame7={() => handleComponentClick("frame7")}
        />
      )}

      {(!isMobile || activeComponent === "frame5") && <FrameComponent5 ref={frame5Ref} />}
      {(!isMobile || activeComponent === "frame6") && <FrameComponent6 ref={frame6Ref} />}
      {(!isMobile || activeComponent === "frame7") && <FrameComponent7 ref={frame7Ref} />}

      <Footer />
    </div>
  );
};

export default Gigafibertechcom;
