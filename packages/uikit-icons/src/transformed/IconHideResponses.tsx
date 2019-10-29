import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconHideResponses = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M60 4H42.5a4 4 0 00-4-4h-13a4 4 0 00-4 4H4a4 4 0 000 8h1v35a5 5 0 005 5h11.2l-5.8 5a3.88 3.88 0 00-.52 5.46l.12.14a4 4 0 003 1.4 3.88 3.88 0 002.6-1L32 53.3 43.4 63a4.45 4.45 0 002.6 1 4 4 0 002.6-7l-5.8-5H54a5 5 0 005-5V12h1a4 4 0 000-8zm-9 40H13V12h38zm7.33-38.33l-53.5 53.5" />
    <path d="M4.83 63.67A4.5 4.5 0 011.65 56l53.5-53.5a4.5 4.5 0 016.36 6.36L8 62.35a4.49 4.49 0 01-3.17 1.32z" />
  </svg>
);

SvgIconHideResponses.defaultProps = defaultProps;
export default SvgIconHideResponses;
