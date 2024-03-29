import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconFullscreen = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="-183 45 32 32" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M-155.6 69.6l-4.6-4.6-2.8 2.8 4.6 4.6-4.6 4.6h12V65zM-171 45h-12v12l4.6-4.6 4.5 4.6 2.9-2.9-4.6-4.5zm0 22.8l-2.8-2.8-4.6 4.6-4.6-4.6v12h12l-4.6-4.6zm20-22.8h-12l4.6 4.6-4.6 4.5 2.9 2.9 4.5-4.6 4.6 4.6z" />
  </svg>
);

SvgIconFullscreen.defaultProps = defaultProps;
export default SvgIconFullscreen;
