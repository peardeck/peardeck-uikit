import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconNewspaper = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60.5 53.79" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M55.44 0H16.06A5.06 5.06 0 0011 5.05v40.73a3 3 0 01-1 2.25l-.14.12a3 3 0 01-1.82.63 3 3 0 01-3-3V12.46a2.5 2.5 0 00-5 0v33.81a8 8 0 0012.32 6.23h43.1a5.07 5.07 0 005.06-5.06V5.05A5.06 5.06 0 0055.44 0zm0 47.5H16L16.06 5l39.44.05z" />
    <path d="M21.49 26.14H51a2.5 2.5 0 002.5-2.5V10.83a2.5 2.5 0 00-2.5-2.5H21.49a2.5 2.5 0 00-2.5 2.5v12.81a2.5 2.5 0 002.5 2.5zm2.5-12.81H48.5v7.81H23.99zM21.49 44h13.93a2.5 2.5 0 000-5H21.49a2.5 2.5 0 000 5zM51 39h-6.33a2.5 2.5 0 000 5H51a2.5 2.5 0 000-5zm-29.51-3.27H51a2.5 2.5 0 000-5H21.49a2.5 2.5 0 100 5z" />
  </svg>
);

SvgIconNewspaper.defaultProps = defaultProps;
export default SvgIconNewspaper;
