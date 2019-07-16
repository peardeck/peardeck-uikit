import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconUndo = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M0 32l25 25V45s26.2-6.8 39 12c0-20.7-17.8-37.5-39-37.5V7L0 32z" />
  </svg>
);

SvgIconUndo.defaultProps = defaultProps;
export default SvgIconUndo;
