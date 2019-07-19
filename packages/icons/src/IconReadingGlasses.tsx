import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconReadingGlasses = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 63 24.68" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M59.17 8.51h-4a12.33 12.33 0 0 0-23.52.22h-.22a12.33 12.33 0 0 0-23.52-.22h-4a3.83 3.83 0 1 0 0 7.66h4a12.32 12.32 0 0 0 23.36.23h.54a12.32 12.32 0 0 0 23.36-.23h4a3.83 3.83 0 0 0 0-7.66zM19.59 19.57a7.23 7.23 0 0 1-7.2-6.7 4.75 4.75 0 0 0 0-.53 4.75 4.75 0 0 0 0-.53 7.22 7.22 0 0 1 14.41.15 4.07 4.07 0 0 0-.06.6 3.41 3.41 0 0 0 .05.46 7.24 7.24 0 0 1-7.2 6.55zm23.82 0a7.23 7.23 0 1 1 7.2-7.76 4.75 4.75 0 0 0 0 .53 4.75 4.75 0 0 0 0 .53 7.23 7.23 0 0 1-7.2 6.7z" />
  </svg>
);

SvgIconReadingGlasses.defaultProps = defaultProps;
export default SvgIconReadingGlasses;
