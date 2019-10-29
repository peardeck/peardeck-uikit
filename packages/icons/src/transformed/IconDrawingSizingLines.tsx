import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingSizingLines = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 19.83 63" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      d="M19.83 2.5a2.5 2.5 0 00-2.5-2.5H0v5h17.33a2.5 2.5 0 002.5-2.5zm-5.66 9.67a2.5 2.5 0 00-2.5-2.5H0v5h11.67a2.5 2.5 0 002.5-2.5zm3.16 7.16H0v5h17.33a2.5 2.5 0 000-5zM14.17 31.5a2.5 2.5 0 00-2.5-2.5H0v5h11.67a2.5 2.5 0 002.5-2.5zm3.16 7.17H0v5h17.33a2.5 2.5 0 000-5zm-3.16 12.16a2.51 2.51 0 00-2.5-2.5H0v5h11.67a2.5 2.5 0 002.5-2.5zM17.33 58H0v5h17.33a2.5 2.5 0 000-5z"
      fill="#616263"
      opacity={0.35}
    />
  </svg>
);

SvgIconDrawingSizingLines.defaultProps = defaultProps;
export default SvgIconDrawingSizingLines;
