import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconSortArrow = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 62.04 35.83"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <path d="M31.11.01a8.68 8.68 0 0 0-6.25 2.57l-9.22 9.11L1.78 25.55a5.75 5.75 0 0 0 0 8.31 6.71 6.71 0 0 0 9.11 0l7.13-6.73 7.1-6.54 6-5.94 5.8 5.94 7.1 6.74 7.13 6.73a6.71 6.71 0 0 0 9.11 0 5.77 5.77 0 0 0 0-8.31L46.57 11.92l-9.11-9.11a8.87 8.87 0 0 0-6.35-2.8z" />
  </svg>
);

SvgIconSortArrow.defaultProps = defaultProps;
export default SvgIconSortArrow;
