import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const PlayPause = ({
  className = "",
  playPauseWidth,
  playPauseHeight,
  playPausePosition,
  playPauseTop,
  playPauseLeft,
}) => {
  const playPauseStyle = useMemo(() => {
    return {
      width: playPauseWidth,
      height: playPauseHeight,
      position: playPausePosition,
      top: playPauseTop,
      left: playPauseLeft,
    };
  }, [
    playPauseWidth,
    playPauseHeight,
    playPausePosition,
    playPauseTop,
    playPauseLeft,
  ]);

  return (
    <div className={`w-5 relative h-7 ${className}`} style={playPauseStyle}>
      <div className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] rounded-lg bg-white" />
      <div className="absolute h-full w-[30%] top-[0%] right-[0%] bottom-[0%] left-[70%] rounded-lg bg-white" />
    </div>
  );
};

PlayPause.propTypes = {
  className: PropTypes.string,

  /** Style props */
  playPauseWidth: PropTypes.any,
  playPauseHeight: PropTypes.any,
  playPausePosition: PropTypes.any,
  playPauseTop: PropTypes.any,
  playPauseLeft: PropTypes.any,
};

export default PlayPause;
