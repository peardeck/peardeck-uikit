import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconWorking = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 56 14"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <circle
      className="icon-working_svg__working-spinner-dot-03"
      cx={49}
      cy={7}
      r={7}
    />
    <circle
      className="icon-working_svg__working-spinner-dot-02"
      cx={28}
      cy={7}
      r={7}
    />
    <circle
      className="icon-working_svg__working-spinner-dot-01"
      cx={7}
      cy={7}
      r={7}
    />
  </svg>
);

SvgIconWorking.defaultProps = defaultProps;
export default SvgIconWorking;
