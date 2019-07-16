import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconFacebook = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 59.38 59.38" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M59.38 9.9a10.26 10.26 0 0 0-9.9-9.9H9.9A10.26 10.26 0 0 0 0 9.9v39.58a10.26 10.26 0 0 0 9.9 9.9h19.79V37h-7.26v-9.9h7.26v-3.9c0-6.65 5-12.64 11.13-12.64h8v9.89h-8c-.87 0-1.89 1.07-1.89 2.66v3.94h9.89V37h-9.89v22.38h10.55a10.26 10.26 0 0 0 9.9-9.9z" />
  </svg>
);

SvgIconFacebook.defaultProps = defaultProps;
export default SvgIconFacebook;
