import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconShare = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 48.67 47.85" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M40.33 31.18a8.28 8.28 0 00-6 2.6l-17.77-8.69a8.52 8.52 0 00.1-1.24 9.73 9.73 0 00-.09-1.22l17.76-8.59a8.32 8.32 0 10-2.28-5.71 9.57 9.57 0 00.09 1.21l-17.76 8.59a8.34 8.34 0 100 11.45l17.74 8.69a8.33 8.33 0 108.21-7.09z" />
  </svg>
);

SvgIconShare.defaultProps = defaultProps;
export default SvgIconShare;
