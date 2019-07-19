import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingResizer = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60.39 60.39" width={size} height={size} {...props}>
    <title>{title}</title>
    <circle cx={30.2} cy={30.2} r={30.2} />
  </svg>
);

SvgIconDrawingResizer.defaultProps = defaultProps;
export default SvgIconDrawingResizer;
