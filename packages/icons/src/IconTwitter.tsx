import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconTwitter = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 61.11 49.67" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M41.99 0a12.53 12.53 0 0 0-12.21 12.53 12.86 12.86 0 0 0 .32 2.86A35.56 35.56 0 0 1 4.26 2.29a12.55 12.55 0 0 0 3.88 16.74 12.53 12.53 0 0 1-5.68-1.57v.16a12.53 12.53 0 0 0 10.1 12.29 12.47 12.47 0 0 1-3.31.44 13.11 13.11 0 0 1-2.36-.22 12.55 12.55 0 0 0 11.67 8.7A25.09 25.09 0 0 1 3 44.2a24.79 24.79 0 0 1-3-.17 35.47 35.47 0 0 0 19.22 5.63c23.06 0 35.68-19.1 35.68-35.67v-1.63a25.26 25.26 0 0 0 6.22-6.53 25 25 0 0 1-7.2 2A12.53 12.53 0 0 0 59.43.89a25.15 25.15 0 0 1-8 3.05 12.52 12.52 0 0 0-9.15-4z" />
  </svg>
);

SvgIconTwitter.defaultProps = defaultProps;
export default SvgIconTwitter;
