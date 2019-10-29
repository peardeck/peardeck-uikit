import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconShapeSquare = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60 60" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M0 0h60v60H0z" />
  </svg>
);

SvgIconShapeSquare.defaultProps = defaultProps;
export default SvgIconShapeSquare;
