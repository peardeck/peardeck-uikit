import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconCollapseArrow = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 63.34 36.59" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M31.77 0a8.86 8.86 0 0 0-6.38 2.62l-9.42 9.3L1.81 26.08a5.87 5.87 0 0 0-.14 8.3l.18.18a6.85 6.85 0 0 0 9.3 0l7.28-6.87 7.24-6.67 6.13-6.07 5.87 6.07 7.25 6.88 7.31 6.85a6.85 6.85 0 0 0 9.3 0 5.89 5.89 0 0 0 .14-8.31l-.15-.15-14-14.12-9.3-9.3A9.06 9.06 0 0 0 31.77 0z" />
  </svg>
);

SvgIconCollapseArrow.defaultProps = defaultProps;
export default SvgIconCollapseArrow;
