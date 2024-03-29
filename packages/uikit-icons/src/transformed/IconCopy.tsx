import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconCopy = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 55.76 54.51" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M9.1 46.76h35.57a2 2 0 002-2V2.01a2 2 0 00-2-2H14.86l-.2.06-.2.11-.15.08a1.42 1.42 0 00-.3.25L.51 14.09a2.42 2.42 0 00-.25.31l-.08.15a1.24 1.24 0 00-.1.2 1.18 1.18 0 00-.07.2v.17a2.54 2.54 0 000 .39v29.25a2 2 0 002 2H9.1zm4.32-39.92v6.67H6.75zm-9.5 10.67h11.5a2 2 0 002-2V4.01h25.25v38.75H3.92z" />
    <path d="M53.76 7.76h-3.34a2 2 0 000 4h1.34v38.75H11.1a2 2 0 000 4h42.66a2 2 0 002-2V9.76a2 2 0 00-2-2z" />
  </svg>
);

SvgIconCopy.defaultProps = defaultProps;
export default SvgIconCopy;
