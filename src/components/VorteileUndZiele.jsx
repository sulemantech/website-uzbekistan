import { useMemo } from "react";
import PropTypes from "prop-types";

const VorteileUndZiele = ({
  className = "",
  vorteileUndZieleWidth,
  vorteileUndZieleHeight,
  vORTEILEZIELEFontSize,
}) => {
  const vorteileUndZieleStyle = useMemo(() => {
    return {
      width: vorteileUndZieleWidth,
      height: vorteileUndZieleHeight,
    };
  }, [vorteileUndZieleWidth, vorteileUndZieleHeight]);

  const vORTEILEZIELEStyle = useMemo(() => {
    return {
      fontSize: vORTEILEZIELEFontSize,
    };
  }, [vORTEILEZIELEFontSize]);

  return (
    <div
      className={`w-[1276px] relative max-w-full h-[92px] text-left text-11xl text-white font-saira-condensed ${className}`}
      style={vorteileUndZieleStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-blueviolet" />
      <img
        className="absolute h-[41.3%] w-[3.29%] top-[29.35%] right-[2.82%] bottom-[29.35%] left-[93.89%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/objects2.svg"
      />
      <b
        className="absolute top-[30.43%] left-[2.35%] leading-[125%] uppercase"
        style={vORTEILEZIELEStyle}
      >{`VORTEILE & ZIELE`}</b>
    </div>
  );
};

VorteileUndZiele.propTypes = {
  className: PropTypes.string,

  /** Style props */
  vorteileUndZieleWidth: PropTypes.any,
  vorteileUndZieleHeight: PropTypes.any,
  vORTEILEZIELEFontSize: PropTypes.any,
};

export default VorteileUndZiele;
