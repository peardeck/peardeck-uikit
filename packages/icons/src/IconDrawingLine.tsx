import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingLine = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60.52 60.52" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M6.06 60.52a6.05 6.05 0 0 1-4.28-10.33L50.2 1.77a6.053 6.053 0 0 1 8.56 8.56L10.34 58.75a6.05 6.05 0 0 1-4.28 1.77" />
  </svg>
);

SvgIconDrawingLine.defaultProps = defaultProps;
export default SvgIconDrawingLine;
