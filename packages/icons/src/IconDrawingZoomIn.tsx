import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingZoomIn = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 59.36 59.24" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M49.68 40.18a26.69 26.69 0 10-9.49 9.48l7.73 7.61a6.703 6.703 0 009.48-9.48m-30.72-3.38a17.78 17.78 0 1117.8-17.81 17.78 17.78 0 01-17.8 17.81z" />
    <path d="M34.68 20.94h-2.3v-2.28a5.69 5.69 0 10-11.37 0v2.28h-2.28a5.69 5.69 0 000 11.38h2.28v2.28a5.69 5.69 0 1011.37 0v-2.28h2.3a5.69 5.69 0 000-11.38z" />
  </svg>
);

SvgIconDrawingZoomIn.defaultProps = defaultProps;
export default SvgIconDrawingZoomIn;
