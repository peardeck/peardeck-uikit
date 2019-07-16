import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconImage = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M53 27l-4 5-9-12-17 22-5-6-7 11h42zM24 17H11v13s13 0 13-13z" />
    <path d="M0 6v52h64V6H0zm56 44H8V14h48v36z" />
  </svg>
);

SvgIconImage.defaultProps = defaultProps;
export default SvgIconImage;
