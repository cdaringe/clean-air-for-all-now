import React from "react";

const P: React.FunctionComponent<React.HTMLProps<HTMLParagraphElement>> = ({
  className = "",
  ...props
}) => <p className={`${className} pt-2 pb-2`} {...props} />;

export default P;
