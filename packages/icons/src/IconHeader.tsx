import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconHeader = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M14 19h36v8H14z" />
    <path d="M0 6v52h64V6H0zm56 44H8V14h48v36z" />
  </svg>
);

SvgIconHeader.defaultProps = defaultProps;
export default SvgIconHeader;
