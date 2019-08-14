import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDropdownArrow = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 51.85 33.36" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M51.84 7.51a7.4 7.4 0 01-2.21 5.31L31.19 31.17a7.5 7.5 0 01-10.59 0L2.19 12.82A7.513 7.513 0 0112.82 2.2l13.1 13.07L39.04 2.2a7.51 7.51 0 0112.8 5.31z" />
  </svg>
);

SvgIconDropdownArrow.defaultProps = defaultProps;
export default SvgIconDropdownArrow;
