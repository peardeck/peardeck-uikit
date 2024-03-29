import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingNavigationRight = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 33.35 51.82" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M7.5 0a7.46 7.46 0 015.31 2.21l18.35 18.44a7.5 7.5 0 010 10.59L12.81 49.65A7.513 7.513 0 112.19 39.02l13.07-13.11L2.19 12.8A7.51 7.51 0 017.5 0z" />
  </svg>
);

SvgIconDrawingNavigationRight.defaultProps = defaultProps;
export default SvgIconDrawingNavigationRight;
