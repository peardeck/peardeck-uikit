import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconFreeResponseNumber = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M60 4H4C1.8 4 0 5.8 0 8v40c0 2.2 1.8 4 4 4h36.6l11.7 11.7c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.2.6-.5.6-.9V52h6c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM19 34.8c0 .9-1.1 1.7-2 1.7-.9 0-2-.8-2-1.7V21.9l-2 2.3c-.3.3-.5.4-.8.4-.7 0-1.3-.6-1.3-1.4 0-.4.2-.7.4-1l4.2-4.2c.3-.4 1-.6 1.5-.6 1 0 2.1.8 2.1 1.9v15.5zM34.4 36H23.5c-.8 0-1.5-.5-1.5-1.5 0-.5.2-1 .7-1.3 6.8-5.1 9.6-7.6 9.6-10.2 0-1.9-1.7-2.8-3.4-2.8-1.6 0-3 .5-4.1 1.4-.3.2-.6.3-1 .3-.8 0-1.5-.6-1.5-1.5 0-.3.1-.5.3-.8 1.1-1.5 3.9-2.4 6.2-2.4 3.7 0 6.8 1.9 6.8 5.6 0 3.4-3.1 7.1-8.1 10.1h6.9c.8 0 1.5.7 1.5 1.5 0 .9-.7 1.6-1.5 1.6zm10.7.6c-2.7 0-5.4-1-6.5-2.5-.2-.2-.3-.4-.3-.7 0-.8.7-1.5 1.5-1.5.3 0 .6.1.9.3 1.2.9 2.8 1.5 4.3 1.5 2.4 0 3.8-1.1 3.8-2.8 0-1.8-1.4-2.6-4.1-2.6-1.2.1-2.4-.3-2.4-1.5 0-.8.6-1.5 1.5-1.5 2.6.1 4.6-.4 4.6-2.4 0-1.7-1.7-2.6-3.7-2.6-1.5 0-2.8.4-3.9 1.3-.3.2-.5.3-.8.3-.7 0-1.5-.6-1.5-1.4 0-.4.2-.8.5-1 1.5-1.3 3.5-2.1 6-2.1 4.1 0 6.8 1.9 6.8 5 0 2.5-2.1 3.9-4.1 4.3 1.8.2 4.3 1.7 4.3 4.5.2 3.1-2.5 5.4-6.9 5.4z" />
  </svg>
);

SvgIconFreeResponseNumber.defaultProps = defaultProps;
export default SvgIconFreeResponseNumber;
