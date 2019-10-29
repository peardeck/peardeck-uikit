import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconExpandPlus = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 51.73 50.93" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M46.11 30.81h-15.2v15.3a5.11 5.11 0 01-10.2 0v-15.3H5.41a5.11 5.11 0 11-.6-10.2h16V5.41a5.11 5.11 0 1110.2-.6v15.9h15.3a5.11 5.11 0 11.6 10.2 2.2 2.2 0 00-.8-.1z" />
  </svg>
);

SvgIconExpandPlus.defaultProps = defaultProps;
export default SvgIconExpandPlus;
