import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDecks = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M58 14V8H0v42h6v6h58V14h-6zM6 44V14h46v30H6z" />
  </svg>
);

SvgIconDecks.defaultProps = defaultProps;
export default SvgIconDecks;
