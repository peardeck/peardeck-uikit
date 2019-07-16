import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconShapeCircle = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 60 60" width={size} height={size} {...props}>
    <title>{title}</title>
    <circle cx={30} cy={30} r={30} />
  </svg>
);

SvgIconShapeCircle.defaultProps = defaultProps;
export default SvgIconShapeCircle;
