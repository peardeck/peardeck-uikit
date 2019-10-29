import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconTransparentTile = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M0 0h16v16H0zm32 0h16v16H32zM16 16h16v16H16zm32 0h16v16H48zM0 32h16v16H0zm32 0h16v16H32zM16 48h16v16H16zm32 0h16v16H48z" />
  </svg>
);

SvgIconTransparentTile.defaultProps = defaultProps;
export default SvgIconTransparentTile;
