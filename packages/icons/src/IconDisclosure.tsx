import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDisclosure = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M8.2 14h47.6c7.3 0 10.9 8.8 5.8 13.9L37.8 51.6c-3.2 3.2-8.4 3.2-11.5 0L2.4 27.9C-2.7 22.8.9 14 8.2 14z" />
  </svg>
);

SvgIconDisclosure.defaultProps = defaultProps;
export default SvgIconDisclosure;
