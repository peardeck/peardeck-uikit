import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconAskAgain = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M0 20v35h43V20H0zm39 31H4V24h35v27z" />
    <path d="M22 64h42V29H45v4h15v27H26v-3h-4v7zm-6.5-32.7c.3-.9.8-1.6 1.4-2.2.6-.6 1.3-1.1 2.2-1.5s1.8-.5 2.8-.5c1.3 0 2.5.2 3.4.6.9.4 1.6.8 2.2 1.4.5.6.9 1.2 1.2 1.8.2.6.4 1.2.4 1.8 0 .9-.1 1.7-.4 2.3-.2.6-.5 1.1-.9 1.5-.4.4-.7.8-1.2 1.1l-1.2.9c-.4.3-.7.6-1 1s-.5.9-.6 1.4V42H20v-1.3c.1-.8.2-1.5.5-2.1.3-.6.6-1 .9-1.4.3-.4.7-.7 1.1-1 .4-.3.7-.6 1.1-.9.3-.3.6-.6.8-.9.2-.3.3-.8.3-1.3 0-.9-.2-1.5-.6-2-.4-.4-1-.6-1.8-.6-.5 0-1 .1-1.3.3-.4.2-.7.5-.9.8-.2.3-.4.7-.5 1.2-.1.5-.2.9-.2 1.5H15c0-1.2.2-2.2.5-3zM24 43.6V48h-4.5v-4.4H24zm37.4-30c-.8-.8-2-.8-2.8 0L55 17.2V15c0-8.3-6.7-15-15-15S25 6.7 25 15c0 1.1.9 2 2 2s2-.9 2-2c0-6.1 4.9-11 11-11s11 4.9 11 11v2.2l-3.6-3.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l7 7c.4.4.9.6 1.4.6s1-.2 1.4-.6l7-7c.8-.8.8-2 0-2.8z" />
  </svg>
);

SvgIconAskAgain.defaultProps = defaultProps;
export default SvgIconAskAgain;
