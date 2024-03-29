import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconShapeHeart = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 62.09 56.75" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M43.85 0c-5.05 0-9.51 4-12.81 7.24C27.74 4.04 23.18 0 18.23 0A18.36 18.36 0 00.04 18.33c0 23.17 31 38.42 31 38.42s31-15.33 31-38.51A18.22 18.22 0 0043.85 0z" />
  </svg>
);

SvgIconShapeHeart.defaultProps = defaultProps;
export default SvgIconShapeHeart;
