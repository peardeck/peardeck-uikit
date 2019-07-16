import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconCheckmarkStroke = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 79.8 79.8" width={size} height={size} {...props}>
    <title>{title}</title>
    <path
      className="icon-checkmark-stroke_svg__st0"
      d="M7.5 46.6l22.2 22 42.6-57.4"
    />
  </svg>
);

SvgIconCheckmarkStroke.defaultProps = defaultProps;
export default SvgIconCheckmarkStroke;
