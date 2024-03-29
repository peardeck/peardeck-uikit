import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconEye = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M32 12C18 12 5.9 20.1 0 32c5.9 11.9 18 20 32 20s26.1-8.1 32-20c-5.9-11.9-18-20-32-20zm15.8 10.6c3.8 2.4 6.9 5.6 9.3 9.4-2.4 3.8-5.6 7-9.3 9.4-4.7 3-10.2 4.6-15.8 4.6-5.6 0-11.1-1.6-15.8-4.6-3.7-2.4-6.9-5.6-9.3-9.4 2.4-3.8 5.6-7 9.3-9.4.2-.2.5-.3.7-.5-.6 1.7-1 3.6-1 5.5 0 8.8 7.2 16 16 16s16-7.2 16-16c0-1.9-.3-3.8-1-5.5.4.2.6.4.9.5zm-15.8 3c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z" />
  </svg>
);

SvgIconEye.defaultProps = defaultProps;
export default SvgIconEye;
