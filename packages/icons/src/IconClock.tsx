import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconClock = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M32 63C14.9 63 1 49.1 1 32S14.9 1 32 1s31 13.9 31 31-13.9 31-31 31zm0-55.6C18.5 7.4 7.4 18.4 7.4 32s11 24.6 24.6 24.6c13.5 0 24.6-11 24.6-24.6S45.5 7.4 32 7.4z" />
    <path d="M47.1 38.3H32c-3.2 0-5.8-2.6-5.8-5.8V18.6c0-2 1.4-3.7 3.4-4 2.4-.3 4.4 1.5 4.4 3.8v12.1h13.3c2.3 0 4.1 2 3.8 4.4-.3 2-2.1 3.4-4 3.4z" />
  </svg>
);

SvgIconClock.defaultProps = defaultProps;
export default SvgIconClock;
