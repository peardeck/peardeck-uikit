import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconPlay = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M6 5v54c0 2.3 2.4 3.7 4.4 2.6l48.1-27c2-1.1 2-4.1 0-5.3l-48.1-27C8.4 1.3 6 2.7 6 5z" />
  </svg>
);

SvgIconPlay.defaultProps = defaultProps;
export default SvgIconPlay;
