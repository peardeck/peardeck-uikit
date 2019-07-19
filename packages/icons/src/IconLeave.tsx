import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconLeave = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M21.3 27.9h20.5l-8.1-7.7c-1.4-1.4-1.4-3.3 0-4.8.7-.7 1.6-.9 2.5-.9.9 0 1.8.4 2.5 1.1l16.7 16.6-16.6 16.7c-1.4 1.4-3.6 1.4-5 0s-1.4-4 0-5.5l8-8.5H21.3c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5z" />
    <path d="M55.1 62.8h-47c-2.2 0-4-1.8-4-4v-53c0-2.2 1.8-4 4-4h47c2.2 0 4 1.8 4 4v12.1c0 2.2-1.8 4-4 4s-4-1.8-4-4V9.8h-39v45h39v-8.1c0-2.2 1.8-4 4-4s4 1.8 4 4v12.1c0 2.2-1.8 4-4 4z" />
  </svg>
);

SvgIconLeave.defaultProps = defaultProps;
export default SvgIconLeave;
