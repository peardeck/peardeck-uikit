import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconArrowSmallLeft = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 33.36 51.85" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M25.85 51.85a7.4 7.4 0 01-5.31-2.21L2.19 31.2a7.5 7.5 0 010-10.59L20.54 2.2a7.51 7.51 0 1110.62 10.63l-13.07 13.1 13.07 13.12a7.51 7.51 0 01-5.31 12.8z" />
  </svg>
);

SvgIconArrowSmallLeft.defaultProps = defaultProps;
export default SvgIconArrowSmallLeft;
