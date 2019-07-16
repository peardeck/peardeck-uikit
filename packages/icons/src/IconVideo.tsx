import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconVideo = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M60 16l-16 6.7V16c0-2.2-1.8-4-4-4H4c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-6.7L60 48c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4z" />
  </svg>
);

SvgIconVideo.defaultProps = defaultProps;
export default SvgIconVideo;
