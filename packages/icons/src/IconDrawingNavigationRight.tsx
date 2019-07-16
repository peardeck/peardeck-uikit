import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingNavigationRight = ({
  title,
  size,
  ...props
}: SvgIconProps) => (
  <svg viewBox="0 0 33.35 51.82" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M7.5 0a7.46 7.46 0 0 1 5.31 2.21l18.35 18.44a7.5 7.5 0 0 1 0 10.59L12.81 49.65A7.513 7.513 0 1 1 2.19 39.02l13.07-13.11L2.19 12.8A7.51 7.51 0 0 1 7.5 0z" />
  </svg>
);

SvgIconDrawingNavigationRight.defaultProps = defaultProps;
export default SvgIconDrawingNavigationRight;
