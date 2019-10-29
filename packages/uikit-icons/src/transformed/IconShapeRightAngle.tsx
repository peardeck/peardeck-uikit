import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconShapeRightAngle = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60 60" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M0 0l60 60H0z" />
  </svg>
);

SvgIconShapeRightAngle.defaultProps = defaultProps;
export default SvgIconShapeRightAngle;
