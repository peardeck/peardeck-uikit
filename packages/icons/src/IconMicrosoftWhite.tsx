import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMicrosoftWhite = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M3 3h27v27H3zM3 34h27v27H3zM34 3h27v27H34zM34 34h27v27H34z" />
  </svg>
);

SvgIconMicrosoftWhite.defaultProps = defaultProps;
export default SvgIconMicrosoftWhite;
