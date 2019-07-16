import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconNavigator = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M16.6 20.9h23.5v15.8H16.6z" />
    <path d="M43.6 38.3c0 1-.8 1.7-1.7 1.7h-18v3.1h23.5V27.4h-3.8v10.9z" />
    <path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm18.8 44.9c0 1-.8 1.7-1.7 1.7h-27c-1 0-1.7-.8-1.7-1.7v-4.8h-5.5c-1 0-1.7-.8-1.7-1.7V19.1c0-1 .8-1.7 1.7-1.7h27c1 0 1.7.8 1.7 1.7v4.8h5.5c1 0 1.7.8 1.7 1.7v19.3z" />
  </svg>
);

SvgIconNavigator.defaultProps = defaultProps;
export default SvgIconNavigator;
