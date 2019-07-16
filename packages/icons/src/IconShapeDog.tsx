import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconShapeDog = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 60.87 55.3" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M15.32 50.6a4.69 4.69 0 0 0 4.7 4.7h4.7v-.2a2.83 2.83 0 0 0-3.1-2.9v-9.4l-6.3 6.3v1.5zM46.52 44.4h-6.3v4.9a4.66 4.66 0 0 0 2.6 4.2l1.4.7c1 .5 3 1 2.3-.4-1.1-2.4-2.2-4.1 0-9.4M40.72.9c.3.1 4.6 1.3 5.1 4.1.6 3.1-2.6 8.7-5 9.6-1.7.6-4.9 1.1-6.5-.6-1.6-1.9-1.1-8.9 2.3-11.8" />
    <path d="M35.42 16c1.9.9 4.7.4 6.2-.2 2.8-1.1 6.5-7.1 5.8-10.7-.6-3.3-4.5-4.7-4.8-4.8l5.1-.3c2.7 0 7.5 1.4 8.2 4.7a24.46 24.46 0 0 1-.1 5.8c.6 1 5.6-1 5 4.6a4.12 4.12 0 0 1-3.4 3.4c-2.5.4-3.9.2-4.4.9-.2.4-.2 8.6-.2 10.7v12.6s-.1 6.3 2 7.7c1 .7 2.1 1.5 2.9 2a3.14 3.14 0 0 1 1.4 2.6v.2h-3.5a6.36 6.36 0 0 1-5.9-4.1l-2.8-7.4a1.54 1.54 0 0 0-1.5-1h-25.6a1.16 1.16 0 0 0-1 .4l-8.3 7.4v1.6a19.37 19.37 0 0 1 1.6 1.6c.4.5 0 1.6 0 1.6h-4.7a1.58 1.58 0 0 1-1.6-1.6v-5.3a6.45 6.45 0 0 1 .3-2l.9-2.4a5.24 5.24 0 0 0 .3-2.5l-1.2-15.9c0-.4-1.4 3.2-2.8 2.8s-3.2-1.6-3.3-2c-.2-1.1 1.5-3 2.7-3.6a24.27 24.27 0 0 1 3.9-.5l19.2.4c2-.1 8.2-.2 10.2-.5.3 0-.5-3.2-.5-5.5-.1-.1-.1-.3-.1-.7m16-8.1a1.7 1.7 0 1 0 0 3.4 1.63 1.63 0 0 0 1.7-1.7 1.69 1.69 0 0 0-1.7-1.7z" />
  </svg>
);

SvgIconShapeDog.defaultProps = defaultProps;
export default SvgIconShapeDog;
