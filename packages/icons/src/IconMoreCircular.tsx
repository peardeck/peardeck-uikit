import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMoreCircular = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 46c-1.9 0-3.5-1.6-3.5-3.5S30.1 39 32 39s3.5 1.6 3.5 3.5S33.9 46 32 46zm0-10.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zM32 25c-1.9 0-3.5-1.6-3.5-3.5S30.1 18 32 18s3.5 1.6 3.5 3.5S33.9 25 32 25z" />
  </svg>
);

SvgIconMoreCircular.defaultProps = defaultProps;
export default SvgIconMoreCircular;
