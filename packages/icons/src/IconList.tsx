import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconList = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M20 8h44v10H20zM20 46h44v10H20zM20 27h44v10H20zM0 8h14v10H0zM0 46h14v10H0zM0 27h14v10H0z" />
  </svg>
);

SvgIconList.defaultProps = defaultProps;
export default SvgIconList;
