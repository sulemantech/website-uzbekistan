import PropTypes from "prop-types";

const GroupComponent = () => {
  return (
    <div
      className={`w-[85.625rem] relative h-[15.5rem] rounded-3xl text-left text-[1rem] text-white font-saira`}
    >
      <div className="absolute bottom-0 left-[0rem] rounded-3xl bg-giga-fiber-lila w-[85.625rem] h-[15.5rem]" />
      <img
        className="absolute top-[calc(50%_+_46px)] left-[4.394rem] w-[18.75rem] h-[2.25rem] overflow-hidden"
        alt=""
        src="/ebene-11.svg"
      />
      <div className="absolute top-[11.356rem] left-[69.625rem] flex flex-row items-center justify-start gap-[1.25rem]">
        <div className="relative leading-[125%]">Impressum</div>
        <div className="relative leading-[125%]">Datenschutz</div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
