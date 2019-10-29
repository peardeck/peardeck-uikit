import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconClose = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm15.3 41.2c1 1 1 2.5 0 3.5l-2.6 2.6c-1 1-2.5 1-3.5 0L32 38.1l-9.2 9.2c-1 1-2.5 1-3.5 0l-2.6-2.6c-1-1-1-2.5 0-3.5l9.2-9.2-9.2-9.2c-1-1-1-2.5 0-3.5l2.6-2.6c1-1 2.5-1 3.5 0l9.2 9.2 9.2-9.2c1-1 2.5-1 3.5 0l2.6 2.6c1 1 1 2.5 0 3.5L38.1 32l9.2 9.2z" />
  </svg>
);

SvgIconClose.defaultProps = defaultProps;
export default SvgIconClose;
