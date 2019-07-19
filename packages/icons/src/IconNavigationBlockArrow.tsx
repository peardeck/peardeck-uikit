import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconNavigationBlockArrow = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 36.59 63.34" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M36.6 31.77a8.86 8.86 0 0 0-2.62-6.38l-9.3-9.42L10.51 1.81a5.87 5.87 0 0 0-8.3-.14l-.18.18a6.85 6.85 0 0 0 0 9.3l6.87 7.28 6.68 7.24 6.07 6.13-6.07 5.87-6.88 7.28-6.87 7.28a6.85 6.85 0 0 0 0 9.3 5.89 5.89 0 0 0 8.33.15l.15-.15 14.12-14 9.3-9.3a9.06 9.06 0 0 0 2.87-6.46z" />
  </svg>
);

SvgIconNavigationBlockArrow.defaultProps = defaultProps;
export default SvgIconNavigationBlockArrow;
