import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconWaitingSpinner = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    className="icon-waiting-spinner_svg__spinner"
    width={size}
    height={size}
    viewBox="0 0 66 66"
    {...props}
  >
    <title>{title}</title>
    <circle
      className="icon-waiting-spinner_svg__spinner-path"
      fill="none"
      strokeWidth={6}
      strokeLinecap="round"
      cx={33}
      cy={33}
      r={30}
    />
  </svg>
);

SvgIconWaitingSpinner.defaultProps = defaultProps;
export default SvgIconWaitingSpinner;
