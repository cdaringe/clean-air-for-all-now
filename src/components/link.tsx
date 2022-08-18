import NextLink from "next/link";
import React from "react";
export function Link({
  children,
  className = "",
  ...rest
}: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink {...rest}>
      <a className={`${className} text-blue-600 visited:text-purple-800`}>
        {children}
      </a>
    </NextLink>
  );
}
