import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconBlock = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M31.6 1C14.5 1 .6 14.9.6 32s13.9 31 31 31 31-13.9 31-31-13.9-31-31-31zm12.9 35.4H19.2c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h25.3c1.8 0 3.3 1.5 3.3 3.3-.1 1.8-1.5 3.3-3.3 3.3z" />
  </svg>
);

SvgIconBlock.defaultProps = defaultProps;
export default SvgIconBlock;
