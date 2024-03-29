import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconBackArrow = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 62.77 60.69" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M57.5 36.73H21.38l13.89 14.19a5.6 5.6 0 010 8.18 5.84 5.84 0 01-4.28 1.58 6.13 6.13 0 01-4.28-1.87L1.25 33.34a4.28 4.28 0 010-6L26.71 1.78a6 6 0 018.56 0 7 7 0 010 9.31L21.38 25.7h35.33a6.05 6.05 0 016 5.89 5.17 5.17 0 01-5.21 5.14z" />
  </svg>
);

SvgIconBackArrow.defaultProps = defaultProps;
export default SvgIconBackArrow;
