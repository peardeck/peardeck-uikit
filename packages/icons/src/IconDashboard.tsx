import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDashboard = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M60 9H4c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V13c0-2.2-1.8-4-4-4zM8 17h12v12H8V17zm0 32V37h12v12H8zm48 0H28V17h28v32z" />
  </svg>
);

SvgIconDashboard.defaultProps = defaultProps;
export default SvgIconDashboard;
