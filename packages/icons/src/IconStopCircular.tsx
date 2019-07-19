import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconStopCircular = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm6.7 48.8H25.4c-.3 0-.5-.1-.7-.3l-9.4-9.3c-.2-.2-.3-.4-.3-.7V25.4c0-.3.1-.5.3-.7l9.3-9.3c.2-.2.4-.3.7-.3h13.4c.3 0 .5.1.7.3l9.2 9.1c.2.2.3.4.3.7v13.4c0 .3-.1.5-.3.7l-9.3 9.2c-.1.2-.3.3-.6.3zm-4-16.7l4-4c.4-.4.4-1.1 0-1.5l-1.1-1.2c-.4-.4-1.1-.4-1.5 0l-4 4-4-4c-.4-.4-1.1-.4-1.5 0l-1.2 1.2c-.4.4-.4 1.1 0 1.5l4 4-4 4c-.4.4-.4 1.1 0 1.5l1.2 1.2c.4.4 1.1.4 1.5 0l4-4 4 4c.4.4 1.1.4 1.5 0l1.2-1.2c.4-.4.4-1.1 0-1.5l-4.1-4z" />
  </svg>
);

SvgIconStopCircular.defaultProps = defaultProps;
export default SvgIconStopCircular;
