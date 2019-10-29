import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconResponsiveDevice = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 49.14 53.66" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M42.91 0H16.32a6.24 6.24 0 00-6.23 6.23v11.42h-6a4.07 4.07 0 00-4.07 4.06v25.15a4.08 4.08 0 004.05 4.08h7.06a6.22 6.22 0 005.19 2.73h26.59a6.24 6.24 0 006.23-6.23V6.23A6.24 6.24 0 0042.91 0zM4.07 48.59a1.72 1.72 0 01-1.75-1.73V21.71a1.73 1.73 0 011.75-1.77h14.18a1.73 1.73 0 011.73 1.73v25.19a1.72 1.72 0 01-1.73 1.73zm14.18-30.94h-.93V7.94a1.59 1.59 0 011.58-1.59h21.35a1.59 1.59 0 011.59 1.59V43a1.59 1.59 0 01-1.59 1.58H22.32V21.71a4.07 4.07 0 00-4.07-4.06zM46.8 47.44a3.89 3.89 0 01-3.89 3.89H16.32a3.82 3.82 0 01-1.72-.4h3.68a4.07 4.07 0 004.04-3.99h17.93a3.93 3.93 0 003.92-3.92V7.94a3.93 3.93 0 00-3.92-3.92H18.94a3.93 3.93 0 00-3.92 3.92v9.73h-2.63V6.23a3.9 3.9 0 013.93-3.89h26.59a3.89 3.89 0 013.89 3.89z" />
    <path d="M29.6 47.58A1.42 1.42 0 1031.01 49a1.42 1.42 0 00-1.41-1.42zm-10.67-22.9a2.6 2.6 0 00-2.61-2.59H5.98a2.6 2.6 0 00-2.59 2.59v19.26a2.59 2.59 0 002.59 2.59h10.34a2.59 2.59 0 002.61-2.59zM16.6 43.94a.26.26 0 01-.26.26H5.98a.26.26 0 01-.26-.26V24.68a.26.26 0 01.26-.25h10.34a.26.26 0 01.26.25zm-5.44-22.6a.41.41 0 10-.41-.41.41.41 0 00.41.41z" />
    <circle cx={11.16} cy={47.58} r={0.58} />
  </svg>
);

SvgIconResponsiveDevice.defaultProps = defaultProps;
export default SvgIconResponsiveDevice;