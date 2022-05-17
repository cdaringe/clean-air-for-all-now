import React from "react";

export const SectionHeader: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  className = "",
  ...rest
}) => (
  <h2
    className={`text-l font-semibold text-slate-900 ${className}`}
    {...rest}
  />
);
