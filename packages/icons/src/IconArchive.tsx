import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconArchive = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 62.8 52" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M62.3 17.7v-4.6a5.59 5.59 0 0 0-5.6-5.6H30.6a1.37 1.37 0 0 1-1.4-1.4v-.5A5.59 5.59 0 0 0 23.6 0h-18A5.59 5.59 0 0 0 0 5.6v40.7a6 6 0 0 0 2.2 4.5A5.5 5.5 0 0 0 5.7 52l51.7-.1a5.7 5.7 0 0 0 5.4-4zM4.2 11.8V5.6a1.37 1.37 0 0 1 1.4-1.4h18.1a1.37 1.37 0 0 1 1.4 1.4v.6a5.57 5.57 0 0 0 5.5 5.6z" />
  </svg>
);

SvgIconArchive.defaultProps = defaultProps;
export default SvgIconArchive;
