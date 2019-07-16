import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconExport = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M19.3 2.4l8.8 8.8c-15 15-15.7 39.5-1.1 54.1C22.8 43 46.1 29.2 46.1 29.2l8.5 8.5V2.4H19.3z" />
  </svg>
);

SvgIconExport.defaultProps = defaultProps;
export default SvgIconExport;
