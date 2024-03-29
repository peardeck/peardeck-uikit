import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingZoomOut = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 59.36 59.24" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M49.68 40.18a26.69 26.69 0 10-9.49 9.48l7.73 7.61a6.703 6.703 0 009.48-9.48m-30.72-3.38a17.78 17.78 0 1117.8-17.81 17.78 17.78 0 01-17.8 17.81z" />
    <rect
      x={13.04}
      y={20.95}
      width={27.32}
      height={11.38}
      rx={5.69}
      ry={5.69}
    />
  </svg>
);

SvgIconDrawingZoomOut.defaultProps = defaultProps;
export default SvgIconDrawingZoomOut;
