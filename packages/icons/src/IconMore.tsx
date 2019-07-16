import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMore = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <circle cx={32} cy={11} r={7} />
    <circle cx={32} cy={32} r={7} />
    <circle cx={32} cy={53} r={7} />
  </svg>
);

SvgIconMore.defaultProps = defaultProps;
export default SvgIconMore;
