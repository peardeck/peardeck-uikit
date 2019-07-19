import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconUngroupAnswers = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M57.6 47.1H6.4C3 47.1.3 44.4.3 41V6.1C.3 2.7 3.1 0 6.4 0h51.2c3.4 0 6.1 2.7 6.1 6.1V41c0 3.3-2.8 6.1-6.1 6.1z" />
    <path d="M32 64L16.1 44.1h31.8z" />
  </svg>
);

SvgIconUngroupAnswers.defaultProps = defaultProps;
export default SvgIconUngroupAnswers;
