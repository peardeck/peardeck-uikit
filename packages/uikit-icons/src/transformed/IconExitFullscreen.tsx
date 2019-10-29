import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconExitFullscreen = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="-183 45 32 32" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M-158.4 72.4l4.6 4.6 2.8-2.8-4.6-4.6 4.6-4.6h-12v12zM-183 57h12V45l-4.6 4.6-4.5-4.6-2.9 2.9 4.6 4.5zm0 17.2l2.8 2.8 4.6-4.6 4.6 4.6V65h-12l4.6 4.6zm20-17.2h12l-4.6-4.6 4.6-4.5-2.9-2.9-4.5 4.6-4.6-4.6z" />
  </svg>
);

SvgIconExitFullscreen.defaultProps = defaultProps;
export default SvgIconExitFullscreen;
