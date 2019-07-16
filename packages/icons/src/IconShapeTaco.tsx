import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconShapeTaco = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 60.11 29.2" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M56.53 28.2l-50.5 1c-3.9 0-6.9-5.1-5.8-8.8C3.43 9.2 12.53.9 24.83.9c2.4 0 10 .3 12.2.9m-22.6 13.6a3.75 3.75 0 0 0 1-.1 4.73 4.73 0 0 0 3.8-3.5 4.84 4.84 0 0 0 1.7 0 4.71 4.71 0 0 0-1.5-9.3 4.73 4.73 0 0 0-3.8 3.5 4.84 4.84 0 0 0-1.7 0 4.67 4.67 0 0 0-3.9 5.4l.1.2a2.49 2.49 0 0 0-.8.1 4.67 4.67 0 0 0-3.9 5.4 5.73 5.73 0 0 0 .4 1.4l.1-.1a4.6 4.6 0 0 0-3.8 5.4 4.73 4.73 0 0 0 5.4 3.9 4.67 4.67 0 0 0 3.9-5.4 5.73 5.73 0 0 0-.4-1.4l-.1.1a4.67 4.67 0 0 0 3.9-5.4" />
    <path d="M3.93 28.2c3.5-1.3 3.1-5.4 3.8-8C11.13 8.9 21.43 0 33.53 0c13.2 0 24.2 8.4 26.5 20.7.5 2.6-1.4 7.6-4 7.6H3.93z" />
  </svg>
);

SvgIconShapeTaco.defaultProps = defaultProps;
export default SvgIconShapeTaco;
