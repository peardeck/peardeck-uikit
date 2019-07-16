import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingSizerBackground = ({
  title,
  size,
  ...props
}: SvgIconProps) => (
  <svg viewBox="0 0 172.8 35.56" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M163 27.58a10 10 0 0 0 6.9-2.87 9.78 9.78 0 0 0 2.9-6.92 9.78 9.78 0 0 0-2.9-6.92A10 10 0 0 0 163 8C126.62 7 17.75 0 17.75 0A17.78 17.78 0 0 0 0 17.79a17.78 17.78 0 0 0 17.77 17.77S126.65 28.58 163 27.58z" />
  </svg>
);

SvgIconDrawingSizerBackground.defaultProps = defaultProps;
export default SvgIconDrawingSizerBackground;
