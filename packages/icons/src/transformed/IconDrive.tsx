import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrive = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M28.7 41.3L18 60h35.3L64 41.3H28.7zM61 36L42.7 4H21.3l18.3 32H61zM18.3 9.3L0 41.3 10.7 60 29 28 18.3 9.3z" />
  </svg>
);

SvgIconDrive.defaultProps = defaultProps;
export default SvgIconDrive;
