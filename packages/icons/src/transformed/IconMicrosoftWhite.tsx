import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconMicrosoftWhite = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M3 3h27v27H3zm0 31h27v27H3zM34 3h27v27H34zm0 31h27v27H34z" />
  </svg>
);

SvgIconMicrosoftWhite.defaultProps = defaultProps;
export default SvgIconMicrosoftWhite;
