import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconFacebookSmall = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 22.45 48.31" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M22.45 15.64H14.8v-5a2 2 0 012.13-2.33h5.4V.02H14.9C6.65.02 4.77 6.19 4.77 10.14v5.52H.02v8.53h4.77v24.12h10V24.17h6.78z" />
  </svg>
);

SvgIconFacebookSmall.defaultProps = defaultProps;
export default SvgIconFacebookSmall;
