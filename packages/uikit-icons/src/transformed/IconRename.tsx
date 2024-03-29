import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconRename = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M58.2 18.4c-.4-1-1-1.9-1.8-2.6l-8.2-8.2c-.8-.8-1.7-1.4-2.6-1.8-1-.4-2-.6-3-.6s-2.1.2-3 .6c-1 .4-1.9 1-2.7 1.8l-.5.5-1.1 1.1L10.4 34c-.2.2-.4.5-.4.8 0 .1 0 .1-.1.2-.4 1.7-4.7 21.8-4.7 21.8v.3c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h.3S24.5 55 29 54c.4-.1.7-.3 1-.6L55.4 28l.5-.5.5-.5c.8-.8 1.4-1.7 1.8-2.7.4-1 .6-2 .6-3-.1-.9-.3-1.9-.6-2.9m-20.7 3.2l5.3 5.3M24.2 45.5l-5.3-5.3m30.8-11L34.8 14.3l2.3-2.3L52 26.9l-2.3 2.3zm-14.5-9.9l-2.7-2.7-18.6 18.6 2.7 2.7 9.9 9.9 2.3 2.3 18.6-18.6-2.3-2.3-9.9-9.9zM10.6 47.2c.7-3.2 1.4-6.6 1.9-8.8l13.1 13.1c-2.7.6-6.4 1.4-9.8 2.1m21-46zm0 .1s0 .1 0 0" />
  </svg>
);

SvgIconRename.defaultProps = defaultProps;
export default SvgIconRename;
