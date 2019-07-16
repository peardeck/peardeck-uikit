import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconShapeTriangle = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 60 51.96" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M30 51.96H0l15-25.98L30 0l15 25.98 15 25.98H30z" />
  </svg>
);

SvgIconShapeTriangle.defaultProps = defaultProps;
export default SvgIconShapeTriangle;
