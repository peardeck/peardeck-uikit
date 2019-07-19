import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconRoundedSquare = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path
      className="icon-rounded-square_svg__st0"
      d="M57.3 1H6.8C3.6 1 1 3.6 1 6.8v50.5c0 3.2 2.6 5.8 5.8 5.8h50.5c3.2 0 5.8-2.6 5.8-5.8V6.8c.1-3.2-2.6-5.8-5.8-5.8z"
    />
  </svg>
);

SvgIconRoundedSquare.defaultProps = defaultProps;
export default SvgIconRoundedSquare;
