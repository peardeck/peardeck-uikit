import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingEraser = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60 60" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M2.3 38.7L21.5 58c.9.9 2 1.3 3.2 1.3s2.4-.4 3.2-1.3l6.7-6.7 23.7-23.7c.9-.9 1.3-2 1.3-3.2s-.5-2.3-1.3-3.2L39 1.9C38.1 1 37 .6 35.8.6s-2.3.5-3.2 1.3L13.2 21.3l-11 11c-.9.9-1.3 2-1.3 3.2s.5 2.4 1.4 3.2zM35.8 7.3L53 24.4 34.7 42.7l-8.6-8.6-8.6-8.6L35.8 7.3z" />
  </svg>
);

SvgIconDrawingEraser.defaultProps = defaultProps;
export default SvgIconDrawingEraser;
