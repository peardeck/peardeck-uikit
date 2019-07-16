import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconProjector = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M60 4H42.5c0-2.2-1.8-4-4-4h-13c-2.2 0-4 1.8-4 4H4C1.8 4 0 5.8 0 8s1.8 4 4 4h1v35c0 2.8 2.2 5 5 5h11.2l-5.8 5c-1.7 1.4-1.9 4-.4 5.6.8.9 1.9 1.4 3 1.4.9 0 1.8-.3 2.6-1L32 53.3 43.4 63c.8.6 1.7 1 2.6 1 1.1 0 2.2-.5 3-1.4 1.4-1.7 1.2-4.2-.4-5.6l-5.8-5H54c2.8 0 5-2.2 5-5V12h1c2.2 0 4-1.8 4-4s-1.8-4-4-4zm-9 40H13V12h38v32z" />
  </svg>
);

SvgIconProjector.defaultProps = defaultProps;
export default SvgIconProjector;
