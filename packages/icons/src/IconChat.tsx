import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconChat = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M58 8H6c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h34l14 14V50h4c3.3 0 6-2.7 6-6V14c0-3.3-2.7-6-6-6zm-6 28H12c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2s-.9 2-2 2zm0-10H12c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2s-.9 2-2 2z" />
  </svg>
);

SvgIconChat.defaultProps = defaultProps;
export default SvgIconChat;
