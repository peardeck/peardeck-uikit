import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconUnblock = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M32 1C14.9 1 1 14.9 1 32s13.9 31 31 31 31-13.9 31-31S49.1 1 32 1zm13.5 35.4h-9.6v9.8c0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3v-9.8h-9.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h9.8V18.9c0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3v10.9h9.6c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3z" />
  </svg>
);

SvgIconUnblock.defaultProps = defaultProps;
export default SvgIconUnblock;
