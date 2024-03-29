import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconSearchSmall = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 59.38 59.28" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M49.7 40.23a26.7 26.7 0 10-9.49 9.48l7.73 7.61a6.703 6.703 0 009.48-9.48M26.7 44.46a17.78 17.78 0 11.05 0z" />
  </svg>
);

SvgIconSearchSmall.defaultProps = defaultProps;
export default SvgIconSearchSmall;
