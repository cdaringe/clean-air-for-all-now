import React, { HTMLProps } from "react";

const Card: React.FC<
  {
    rtitle?: boolean;
    title: string | JSX.Element;
    children: any;
  } & HTMLProps<HTMLDivElement>
> = ({ children, rtitle, title, className = "", ...rest }) => {
  return (
    <div className={`${className} flex font-sans`} {...rest}>
      <form className="flex-auto mb-4 p-4 bg-white shadow-lg rounded-md">
        <h1
          className={`${
            rtitle ? "text-right" : ""
          } flex-auto text-xl font-semibold text-slate-900`}
        >
          {title}
        </h1>
        {children}
      </form>
    </div>
  );
};
export default Card;
