import React from "react";

const sizes = {
  "3xl": "text-[34px] font-semibold md:text-[32px] sm:text-3xl",
};

const Heading = ({ children, className = "", size = "3xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-barlow ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
