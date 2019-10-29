import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconTwitter = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 61.11 49.67" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M41.99 0a12.53 12.53 0 00-12.21 12.53 12.86 12.86 0 00.32 2.86A35.56 35.56 0 014.26 2.29a12.55 12.55 0 003.88 16.74 12.53 12.53 0 01-5.68-1.57v.16a12.53 12.53 0 0010.1 12.29 12.47 12.47 0 01-3.31.44 13.11 13.11 0 01-2.36-.22 12.55 12.55 0 0011.67 8.7A25.09 25.09 0 013 44.2a24.79 24.79 0 01-3-.17 35.47 35.47 0 0019.22 5.63c23.06 0 35.68-19.1 35.68-35.67v-1.63a25.26 25.26 0 006.22-6.53 25 25 0 01-7.2 2A12.53 12.53 0 0059.43.89a25.15 25.15 0 01-8 3.05 12.52 12.52 0 00-9.15-4z" />
  </svg>
);

SvgIconTwitter.defaultProps = defaultProps;
export default SvgIconTwitter;
