import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconPin = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M51 33.3c-2-2.5-4.3-3.8-6.8-3.8V9.8c1.3 0 2.5-.5 3.4-1.5 1-1 1.5-2.1 1.5-3.5 0-1.3-.5-2.5-1.5-3.5S45.5-.2 44.2-.2H19.8c-1.3 0-2.5.5-3.4 1.5s-1.5 2.1-1.5 3.5.5 2.5 1.5 3.5 2.1 1.5 3.4 1.5v19.7c-2.5 0-4.8 1.3-6.8 3.8s-3 5.4-3 8.5c0 .7.2 1.2.7 1.7.5.5 1.1.7 1.7.7h15.4l3 18.8c.1.7.5 1 1.2 1 .3 0 .6-.1.8-.3.2-.2.3-.5.4-.8l1.9-18.6h16.4c.7 0 1.2-.2 1.7-.7.5-.5.7-1.1.7-1.7.1-3.2-.9-6-2.9-8.6zm-22.7-5c0 .4-.1.7-.3.9-.2.2-.5.3-.9.3s-.6-.1-.9-.3c-.2-.2-.3-.5-.3-.9V11.1c0-.4.1-.7.3-.9.2-.2.5-.3.9-.3s.6.1.9.3c.2.2.3.5.3.9v17.2z" />
  </svg>
);

SvgIconPin.defaultProps = defaultProps;
export default SvgIconPin;
