import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconModalClose = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 60.07 58.94" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M57.9 46.23a4.34 4.34 0 0 1 0 6.4l-4.87 4.9a4.34 4.34 0 0 1-6.4 0l-16.95-17-16.94 17a4.35 4.35 0 0 1-6.41 0l-4.89-4.9a4.34 4.34 0 0 1 0-6.4l17-16.95L2.16 12.71a4.34 4.34 0 0 1 0-6.4l4.87-4.9a4.34 4.34 0 0 1 6.4 0l17 17 16.92-17a4.35 4.35 0 0 1 6.41 0l4.89 4.9a4.34 4.34 0 0 1 0 6.4L41.7 29.66z" />
  </svg>
);

SvgIconModalClose.defaultProps = defaultProps;
export default SvgIconModalClose;
