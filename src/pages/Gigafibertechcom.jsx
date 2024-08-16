import React, { useRef, useState } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";

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
        isMobile={isMobile}
        scrollToFrame4={() => scrollToRef(frame4Ref)}
      />
      <FrameComponent3 />
      <FrameComponent4
        isMobile={isMobile}
        ref={frame4Ref}
        scrollToFrame5={() => scrollToRef(frame5Ref)}
        scrollToFrame6={() => scrollToRef(frame6Ref)}
        scrollToFrame7={() => scrollToRef(frame7Ref)}
      />
      {!isMobile && (
        <>
          <FrameComponent5 ref={frame5Ref} />
          <FrameComponent6 ref={frame6Ref} />
          <FrameComponent7 ref={frame7Ref} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Gigafibertechcom;
