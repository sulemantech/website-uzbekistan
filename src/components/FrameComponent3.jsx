import PlayPause from "./PlayPause";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-[2.5rem] px-[2.437rem] pb-[0rem] ${className}`}
    >
      <div className="self-stretch rounded-sm bg-giga-fiber-lila flex flex-col items-start justify-start p-[1.5rem]">
        <div className="w-[65.438rem] rounded-md h-[36rem] flex flex-col items-end justify-end py-[2.125rem] px-[2rem] box-border">
          <div className="w-[1.938rem] flex flex-row items-start justify-end gap-[1.875rem]">
            <PlayPause
              playPauseWidth="1.25rem"
              playPauseHeight="1.75rem"
              playPausePosition="relative"
              playPauseTop="unset"
              playPauseLeft="unset"
            />
            <img
              className="w-[1.938rem] relative h-[1.75rem] overflow-hidden shrink-0"
              alt=""
              src="/sound-on-off.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
