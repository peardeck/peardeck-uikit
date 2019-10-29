import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingShapes = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 62 61.79" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M38.62 15.03A23.38 23.38 0 1062 38.41a23.4 23.4 0 00-23.38-23.38zm0 41.5a18.13 18.13 0 1118.13-18.12 18.15 18.15 0 01-18.13 18.12z" />
    <path d="M38.28 12.02a26.21 26.21 0 0111.19 2.5V7.26A7.26 7.26 0 0042.21 0H7.26A7.26 7.26 0 000 7.26V42.2a7.26 7.26 0 007.26 7.26h7.16a26.31 26.31 0 0123.86-37.44z" />
  </svg>
);

SvgIconDrawingShapes.defaultProps = defaultProps;
export default SvgIconDrawingShapes;
