import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconList = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M20 8h44v10H20zm0 38h44v10H20zm0-19h44v10H20zM0 8h14v10H0zm0 38h14v10H0zm0-19h14v10H0z" />
  </svg>
);

SvgIconList.defaultProps = defaultProps;
export default SvgIconList;
