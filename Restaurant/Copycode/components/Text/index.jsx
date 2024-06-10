import React from "react";

const sizes = {
  "3xl": "text-[26px] font-normal md:text-2xl sm:text-[22px]",
  xl: "text-lg font-normal",
  md: "text-sm font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-barlow ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
