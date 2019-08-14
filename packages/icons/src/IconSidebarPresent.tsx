import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconSidebarPresent = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 56.52 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M47.32 0H9.19A9.19 9.19 0 000 9.19v45.62A9.19 9.19 0 009.19 64h38.13a9.19 9.19 0 009.19-9.19V9.19A9.19 9.19 0 0047.32 0zm.81 33.8L12.98 52.28a2.15 2.15 0 01-3.21-1.78v-37a2.21 2.21 0 013.21-1.85l35.15 18.52a2.05 2.05 0 010 3.63z" />
  </svg>
);

SvgIconSidebarPresent.defaultProps = defaultProps;
export default SvgIconSidebarPresent;
