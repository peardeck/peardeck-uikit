import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconExpandWindow = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 32 32" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M16 19.73L12.27 16l-6.14 6.13L0 16v16h16l-6.13-6.13L16 19.73zM32 0H16l6.13 6.13-6.13 6L19.87 16l6-6.13L32 16V0z" />
  </svg>
);

SvgIconExpandWindow.defaultProps = defaultProps;
export default SvgIconExpandWindow;
