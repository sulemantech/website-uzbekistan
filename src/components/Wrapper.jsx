import React, { forwardRef } from "react";

const Wrapper = forwardRef(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-white w-[95vw] max-w-[1500px] mx-auto mb-10 flex flex-col items-center rounded-22xl max-md:rounded-t-none p-5 md:p-10 m-5 max-md:w-[87vw]`}
    {...props}
  >
    {children}
  </div>
));

export default Wrapper;
