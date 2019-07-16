import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingSizingLines = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 19.83 63" width={size} height={size} {...props}>
    <title>{title}</title>
    <defs>
      <style>{".icon-drawing-sizing-lines_svg__b{fill:#616263}"}</style>
    </defs>
    <g opacity={0.35}>
      <path
        className="icon-drawing-sizing-lines_svg__b"
        d="M19.83 2.5a2.5 2.5 0 0 0-2.5-2.5H0v5h17.33a2.5 2.5 0 0 0 2.5-2.5zM14.17 12.17a2.5 2.5 0 0 0-2.5-2.5H0v5h11.67a2.5 2.5 0 0 0 2.5-2.5zM17.33 19.33H0v5h17.33a2.5 2.5 0 0 0 0-5zM14.17 31.5a2.5 2.5 0 0 0-2.5-2.5H0v5h11.67a2.5 2.5 0 0 0 2.5-2.5zM17.33 38.67H0v5h17.33a2.5 2.5 0 0 0 0-5zM14.17 50.83a2.51 2.51 0 0 0-2.5-2.5H0v5h11.67a2.5 2.5 0 0 0 2.5-2.5zM17.33 58H0v5h17.33a2.5 2.5 0 0 0 0-5z"
      />
    </g>
  </svg>
);

SvgIconDrawingSizingLines.defaultProps = defaultProps;
export default SvgIconDrawingSizingLines;
