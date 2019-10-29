import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconClockBase = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 58.67 58.67" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M29.33 58.66a29.33 29.33 0 1129.33-29.33 29.37 29.37 0 01-29.33 29.33zm0-50.66a21.33 21.33 0 1021.33 21.33A21.36 21.36 0 0029.33 8z" />
  </svg>
);

SvgIconClockBase.defaultProps = defaultProps;
export default SvgIconClockBase;
