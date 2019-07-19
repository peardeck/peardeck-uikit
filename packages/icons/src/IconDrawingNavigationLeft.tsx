import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingNavigationLeft = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 33.35 51.82" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M25.85 51.82a7.47 7.47 0 0 1-5.31-2.17L2.19 31.2a7.48 7.48 0 0 1 0-10.58L20.54 2.21A7.5 7.5 0 1 1 31.16 12.8L18.09 25.91l13.07 13.11a7.51 7.51 0 0 1-5.31 12.8z" />
  </svg>
);

SvgIconDrawingNavigationLeft.defaultProps = defaultProps;
export default SvgIconDrawingNavigationLeft;
