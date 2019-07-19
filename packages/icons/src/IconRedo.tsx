import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconRedo = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 50" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M39 0v12.5C17.8 12.5 0 29.3 0 50c12.8-18.8 39-12 39-12v12l25-25z" />
  </svg>
);

SvgIconRedo.defaultProps = defaultProps;
export default SvgIconRedo;
