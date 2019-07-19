import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconProjectorCircular = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <path d="M32 .03a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm14 22h-.5v17.5a2.48 2.48 0 0 1-2.5 2.5h-5.6l2.9 2.5a2 2 0 0 1-1.3 3.5 2.22 2.22 0 0 1-1.3-.5L32 42.68l-5.7 4.85a1.94 1.94 0 0 1-1.3.5 2 2 0 0 1-1.5-.7 1.94 1.94 0 0 1 .13-2.74l.07-.06 2.9-2.5H21a2.48 2.48 0 0 1-2.5-2.46V22.03H18a2 2 0 0 1 0-4h8.75a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2H46a2 2 0 0 1 0 4z" />
    <path d="M22.5 22.03h19v16h-19z" />
  </svg>
);

SvgIconProjectorCircular.defaultProps = defaultProps;
export default SvgIconProjectorCircular;
