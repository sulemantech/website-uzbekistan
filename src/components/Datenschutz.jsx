import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Datenschutz = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const heading = (text) => {
    return (
      <p className="w-[518px] text-[#903fff] font-saira-condensed text-3xl font-bold leading-[37.5px] text-uppercase">
        {text}
      </p>
    );
  };
  const heading2 = (text) => {
    return (
      <p className="text-[#903fff] font-saira-condensed text-sm font-bold leading-[20px]">
        {text}
      </p>
    );
  };
  const paragraph=(text)=>{
    return(<p className="text-[#000] font-saira-condensed text-sm font-normal leading-[20px]">{text}</p>);
  };
  const link = (text, href) => {
    return (
      <a href={href} className="text-black font-saira-condensed text-sm font-normal leading-[20px] underline">
        {text}
      </a>
    );
  };
  const link2 = (text, href) => {
    return (
      <a href={href} className="text-[#903fff] font-saira-condensed text-sm font-normal leading-[20px] underline">
        {text}
      </a>
    );
  };

  // const listItems = [
  //   t("frameComponent5_answers_investment_listItems_0"),
  //   t("frameComponent5_answers_investment_listItems_1"),
  //   t("frameComponent5_answers_investment_listItems_2"),
  //   t("frameComponent5_answers_investment_listItems_3"),
  //   t("frameComponent5_answers_investment_listItems_4")
  // ];
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
  <>
  <Footer/>
  </>
  );
};

export default Datenschutz;
