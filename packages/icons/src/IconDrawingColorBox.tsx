import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingColorBox = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 60.39 60.39" width={size} height={size} {...props}>
    <title>{title}</title>
    <rect width={60.39} height={60.39} rx={5.17} ry={5.17} />
  </svg>
);

SvgIconDrawingColorBox.defaultProps = defaultProps;
export default SvgIconDrawingColorBox;
