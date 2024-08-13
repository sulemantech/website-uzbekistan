import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <div
      className={`w-[90rem] relative rounded-t-none rounded-b-22xl h-[43.563rem] text-left text-[6.25rem] text-white font-saira-condensed ${className}`}
    >
      <div className="absolute top-[2.313rem] left-[2.188rem] w-[77.5rem] flex flex-col items-start justify-start gap-[16.937rem]">
        <img
          className="w-[13.438rem] relative h-[1.688rem] overflow-hidden shrink-0"
          alt=""
          src="/ebene-1.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[77.5rem] relative h-[15.75rem]">
                <b className="absolute top-[0rem] left-[0rem]">
                  TRANSFORMING INFRASTRUCTURE.
                </b>
                <b className="absolute top-[5.938rem] left-[0rem] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#281d57,_#1e1a2e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  DRIVING REGIONAL GROWTH.​
                </b>
              </div>
              <div className="flex flex-row items-center justify-start">
                <Button
                  buttonPosition="unset"
                  buttonPadding="0rem 0.312rem"
                  buttonGap="1rem"
                  buttonWidth="14.75rem"
                  mEHRERFAHRENFontSize="1.875rem"
                  objectsIconWidth="1.813rem"
                  objectsIconHeight="1.625rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
