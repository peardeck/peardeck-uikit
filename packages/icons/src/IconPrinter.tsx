import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconPrinter = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 250 244.6" width={size} height={size} {...props}>
    <title>{title}</title>
    <path
      className="icon-printer_svg__a"
      d="M78.5 172.1h93a11 11 0 000-22h-93a11 11 0 000 22zM78.5 205.1h93a11 11 0 000-22h-93a11 11 0 000 22z"
    />
    <path
      className="icon-printer_svg__a"
      d="M250 48.2h-30.93V11a11 11 0 00-11-11H49.93a11 11 0 00-11 11v37.2H0v138h34.93v47.4a11 11 0 0011 11h158.14a11 11 0 0011-11v-47.38H250zM60.93 22h136.14v26.2H60.93zm132.14 200.6H56.93V137h136.14z"
    />
  </svg>
);

SvgIconPrinter.defaultProps = defaultProps;
export default SvgIconPrinter;
