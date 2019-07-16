import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconSlideDeck = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 49.3" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M55.9 0H0v42h55.9V0zm-6 18.6H6.6V10H50l-.1 8.6z" />
    <path d="M59.5 3.8v41.7H9.3v3.8H64V3.8z" />
  </svg>
);

SvgIconSlideDeck.defaultProps = defaultProps;
export default SvgIconSlideDeck;
