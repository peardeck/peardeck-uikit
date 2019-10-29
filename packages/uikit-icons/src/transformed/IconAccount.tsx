import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconAccount = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M58 64c0-11-7-20-16.7-23.6-.1-.1-.3-.1-.4-.2 2.2-2.3 3.9-5.6 4.6-10.5 1 .1 2.3-.8 2.7-2.7.5-1.9 1.4-4.8.3-5.2-.3-.1-.6 0-.6.1v-5c0-5.5-.9-10.9-6.7-13.2-1-2.3-1.3-3.9-1.3-3.9-2.6 2.4-12.8 3.9-12.8 3.9h.1C14.6 4.9 16 9.1 16 17v5.1c0-.1-.4-.3-.7-.1-1 .3-.5 3.2-.2 5.1.4 1.7 2 3 3.1 2.8.8 5 2.2 8.4 4.3 10.5C12.9 44 6 53 6 64h52z" />
  </svg>
);

SvgIconAccount.defaultProps = defaultProps;
export default SvgIconAccount;
