import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMenuClose = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M41.9 32l14.8-14.8c1.6-1.6 1.6-4.1 0-5.7l-4.2-4.2c-1.6-1.6-4.1-1.6-5.7 0L32 22.1 17.2 7.3c-1.6-1.6-4.1-1.6-5.7 0l-4.2 4.2c-1.6 1.6-1.6 4.1 0 5.7L22.1 32 7.3 46.8c-1.6 1.6-1.6 4.1 0 5.7l4.2 4.2c1.6 1.6 4.1 1.6 5.7 0L32 41.9l14.8 14.8c1.6 1.6 4.1 1.6 5.7 0l4.2-4.2c1.6-1.6 1.6-4.1 0-5.7L41.9 32z" />
  </svg>
);

SvgIconMenuClose.defaultProps = defaultProps;
export default SvgIconMenuClose;
