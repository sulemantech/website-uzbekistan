import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Datenschutz = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const heading = (text) => {
    return (
      <p className="w-[518px] text-[#903fff]  text-3xl font-bold leading-[37.5px] text-uppercase">
        {text}
      </p>
    );
  };
  const heading2 = (text) => {
    return (
      <p className="text-[#903fff]  text-sm font-bold leading-[20px]">
        {text}
      </p>
    );
  };
  const paragraph = (text) => {
    return (
      <p className="text-[#000]  text-sm font-normal leading-[20px]">
        {text}
      </p>
    );
  };
  const link = (text, href) => {
    return (
      <a
        href={href}
        className="text-black  text-sm font-normal leading-[20px] underline"
      >
        {text}
      </a>
    );
  };
  const link2 = (text, href) => {
    return (
      <a
        href={href}
        className="text-[#903fff]  text-sm font-normal leading-[20px] underline"
      >
        {text}
      </a>
    );
  };

  const ListComponent = ({ items }) => (
    <ul className="list-none">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative pl-5 mb-2 before:absolute before:left-0 before:top-[25%] before:-translate-y-1/2 before:w-1 before:h-2 before:bg-[#000] before:rounded-full"
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
<div className="w-full h-full [background:linear-gradient(180deg,_#281d57,_#1e1a2e)] overflow-hidden relative">
  {/* <video
    className="absolute top-0 left-0 w-full h-full object-cover -z-40"
    src="headerbgvideo.mov"
    autoPlay
    loop
    muted
    playsInline
  ></video> */}
  <div className="bg-gradient-to-b from-[#281D57] to-[#1E1A2E] w-full z-20 h-[70px] py-[21px] px-[49px]">
    <img src="gigafibertoplogo.svg" alt="Gigafiber Logo" />
  </div>
  <div className="w-[95.5vw] flex flex-col my-10 rounded-2xl items-center gap-[40px] mx-auto bg-white z-[999]">
    <div className="w-[80%] my-10">
    
    </div>
  </div>
  <div className="flex items-center">
    <Footer />
  </div>
</div>

  );
};

export default Datenschutz;
