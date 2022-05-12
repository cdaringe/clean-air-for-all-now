import React from "react";

export const PageHeader: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  className = "",
  ...rest
}) => (
  <h2
    className={`text-xl font-semibold text-slate-900 ${className}`}
    {...rest}
  />
);
