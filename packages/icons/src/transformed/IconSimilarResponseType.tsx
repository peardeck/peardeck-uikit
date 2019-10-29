import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconSimilarResponseType = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M39.6 35h19.8c2.6 0 4.6 2.1 4.6 4.6v19.8c0 2.6-2 4.6-4.6 4.6H39.6c-2.5 0-4.6-2-4.6-4.6V39.6c0-2.5 2.1-4.6 4.6-4.6zm-35 0h19.8c2.5 0 4.6 2 4.6 4.6v19.8c0 2.6-2.1 4.6-4.6 4.6H4.6C2 64 0 62 0 59.4V39.6C0 37.1 2 35 4.6 35zm35-35h19.8C62 0 64 2 64 4.6v19.8c0 2.5-2 4.6-4.6 4.6H39.6c-2.5 0-4.6-2-4.6-4.6V4.6C35 2 37.1 0 39.6 0zm18.3 6.1H41.1v16.8h16.8V6.1zM4.6 0h19.8C26.9 0 29 2 29 4.6v19.8c0 2.5-2 4.6-4.6 4.6H4.6C2.1 29 0 27 0 24.4V4.6C0 2 2 0 4.6 0zm18.3 6.1H6.1v16.8h16.8V6.1z" />
  </svg>
);

SvgIconSimilarResponseType.defaultProps = defaultProps;
export default SvgIconSimilarResponseType;
