import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconHome = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 59.44 50.53" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M29.72 0L0 26.75h8.92v23.78h14.86V32.7h11.89v17.83h14.86V26.75h8.91L29.72 0z" />
  </svg>
);

SvgIconHome.defaultProps = defaultProps;
export default SvgIconHome;
