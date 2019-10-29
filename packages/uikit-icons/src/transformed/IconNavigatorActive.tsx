import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconNavigatorActive = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M49.1 23.9h-5.5v-4.8c0-1-.8-1.7-1.7-1.7h-27c-1 0-1.7.8-1.7 1.7v19.2c0 1 .8 1.7 1.7 1.7h5.5v4.8c0 1 .8 1.7 1.7 1.7h27c1 0 1.7-.8 1.7-1.7V25.7c0-1-.8-1.8-1.7-1.8zm-32.5-3h23.5v15.8H16.6V20.9zm30.8 22.2H23.9V40h18c1 0 1.7-.8 1.7-1.7v-11h3.8v15.8z" />
  </svg>
);

SvgIconNavigatorActive.defaultProps = defaultProps;
export default SvgIconNavigatorActive;
