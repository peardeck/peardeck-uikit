import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconCheckmark = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M57.4 22.6L29.8 50.1c-1.2 1.2-2.7 1.8-4.3 1.8s-3.1-.5-4.3-1.8L6.6 35.5c-2.4-2.4-2.4-6.2 0-8.6s6.2-2.4 8.6 0l10.3 10.3L48.7 14c2.4-2.4 6.2-2.4 8.6 0 2.5 2.4 2.5 6.2.1 8.6z" />
  </svg>
);

SvgIconCheckmark.defaultProps = defaultProps;
export default SvgIconCheckmark;
