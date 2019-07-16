import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconCalendar = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 44.54 47.97" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M43.01 3.44h-6.55V2.19a2.18 2.18 0 1 0-4.36 0v1.25H12.44V2.19a2.18 2.18 0 1 0-4.36 0v1.25H1.53A1.52 1.52 0 0 0 0 4.99v41.46a1.53 1.53 0 0 0 1.53 1.54h41.48a1.53 1.53 0 0 0 1.53-1.53V4.99a1.52 1.52 0 0 0-1.53-1.55zM8.08 6.49v4.74a2.18 2.18 0 1 0 4.36 0V6.49H32.1v4.74a2.18 2.18 0 1 0 4.36 0V6.49h5v10.34H3.06V6.49zm-5 38.43v-25h38.4v25z" />
    <rect x={17.55} y={22.59} width={8.87} height={8.87} rx={1.13} ry={1.13} />
    <rect x={28.78} y={22.59} width={8.87} height={8.87} rx={1.13} ry={1.13} />
    <rect x={6.33} y={34.05} width={8.87} height={8.87} rx={1.13} ry={1.13} />
    <rect x={17.55} y={34.13} width={8.87} height={8.87} rx={1.13} ry={1.13} />
    <rect x={28.78} y={33.97} width={8.87} height={8.87} rx={1.13} ry={1.13} />
  </svg>
);

SvgIconCalendar.defaultProps = defaultProps;
export default SvgIconCalendar;
