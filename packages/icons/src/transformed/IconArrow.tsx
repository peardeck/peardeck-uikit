import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconArrow = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm17 37H25.7l9.2 8.7c1.6 1.6 1.6 3.8 0 5.4-.8.8-1.8 1-2.8 1s-2-.5-2.8-1.2L10.3 32l18.8-18.8c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.6 0 6.2L25.7 29H49c2.2 0 4 1.8 4 4s-1.8 4-4 4z" />
  </svg>
);

SvgIconArrow.defaultProps = defaultProps;
export default SvgIconArrow;
