import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconShapeCat = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 61.63 60.3" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M15.8 55.5a4.69 4.69 0 004.7 4.7h4.7V60a2.83 2.83 0 00-3.1-2.9v-9.4L15.8 54v1.5zm31.3-6.2h-6.3v4.9a4.66 4.66 0 002.6 4.2l1.4.7c1 .5 3 1 2.3-.4-1.2-2.4-2.2-4.1 0-9.4M44.4 4s.2-2.9 1.3-3.8a.52.52 0 01.4-.2c1.6-.1 2.5 3.5 2.5 3.5z" />
    <path d="M43.5 5.3a25.92 25.92 0 014.8-.4c2.7 0 7.4-.1 9.2 2.7l2.9 5.8c.6 1 1.7 3 1 4.6-.8 1.8-2.1 4.2-3.4 4.4-2.5.4-3.9 1.2-4.4 1.9-.2.4-.2 8.6-.2 10.7v12.6s-.1 6.3 2 7.7c1 .7 2.1 1.5 2.9 2a3.14 3.14 0 011.4 2.6v.3h-3.5a6.36 6.36 0 01-5.9-4.1l-2.8-7.4a1.54 1.54 0 00-1.5-1H20.4a1.16 1.16 0 00-1 .4l-8.3 7.4v1.6a19.37 19.37 0 011.6 1.6c.4.5 0 1.6 0 1.6H8a1.58 1.58 0 01-1.6-1.6v-5.3a6.45 6.45 0 01.3-2l.9-2.5a5.24 5.24 0 00.3-2.5L6.7 30.5a3.86 3.86 0 00-1.1-2.2A15.73 15.73 0 010 16.5 16.19 16.19 0 014.6 5.8 1.73 1.73 0 017 6a1.57 1.57 0 010 2.2c-1 1-4.3 4.5-3.7 7.9 2 10.1 14.7 11.9 23 11.5 2-.1 8.2-.2 10.2-.5.3 0-.5-6.2-.5-8.5 0-.2-.6-5.1 1.5-8.9s1.8-7.9 3.4-9.4S44 5.2 44 5.2zm10.3 5.9a1.7 1.7 0 000 3.4 1.63 1.63 0 001.7-1.7 1.63 1.63 0 00-1.7-1.7z" />
  </svg>
);

SvgIconShapeCat.defaultProps = defaultProps;
export default SvgIconShapeCat;
