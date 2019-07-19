import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMsftCircle = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60 60" width={size} height={size} {...props}>
    <title>{title}</title>
    <circle
      className="icon-msft-circle_svg__ms-team__loading-spinner__path--no-spin"
      cx={30}
      cy={30}
      r={30}
    />
  </svg>
);

SvgIconMsftCircle.defaultProps = defaultProps;
export default SvgIconMsftCircle;
