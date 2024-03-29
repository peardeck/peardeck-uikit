import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconThumb = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="97 62 22 22" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M118.2 74.2c.5-.6.8-1.3.8-2.1 0-.7-.3-1.4-.8-1.9s-1.1-.8-1.9-.8h-3.8c0-.1.1-.2.1-.3s.1-.2.2-.3c.1-.1.1-.2.1-.3.2-.3.3-.6.4-.8.1-.2.2-.5.3-.9.1-.4.1-.7.1-1.1v-.6c0-.1 0-.4-.1-.6 0-.3-.1-.5-.2-.7l-.3-.6c-.2-.2-.3-.4-.6-.6-.2-.1-.5-.3-.8-.4s-.7-.2-1.1-.2c-.2 0-.4.1-.6.3-.2.2-.3.4-.5.7-.1.3-.2.5-.3.7-.1.2-.1.5-.2.9s-.1.7-.2.9c0 .2-.1.4-.2.7-.1.3-.3.5-.4.7-.3.3-.8.9-1.4 1.7-.4.6-.9 1.2-1.4 1.7-.5.5-.8.8-1 .8-.2 0-.4.1-.6.3-.2.2-.2.4-.2.6v9.2c0 .2.1.5.3.6.2.2.4.3.6.3.3 0 1 .2 2.2.6.7.2 1.3.4 1.7.6.4.1 1 .3 1.7.4.7.1 1.4.2 2 .2h1.7c1.2 0 2.1-.4 2.7-1.1.5-.7.8-1.5.7-2.6.4-.4.6-.8.7-1.3.2-.6.2-1.1 0-1.7.4-.6.6-1.2.6-2-.1-.2-.1-.6-.3-1zm-16.4-3h-4c-.2 0-.4.1-.6.3-.2.2-.3.4-.3.6v9.2c0 .2.1.5.3.6.2.2.4.3.6.3h4c.2 0 .4-.1.6-.3.2-.2.3-.4.3-.6v-9.2c0-.2-.1-.5-.3-.6-.1-.2-.3-.3-.6-.3zm-1.5 8.9c-.2.2-.4.3-.6.3-.2 0-.5-.1-.6-.3-.2-.2-.3-.4-.3-.7 0-.2.1-.5.3-.6.2-.2.4-.3.6-.3.2 0 .4.1.6.3.2.2.3.4.3.6-.1.3-.2.5-.3.7z" />
  </svg>
);

SvgIconThumb.defaultProps = defaultProps;
export default SvgIconThumb;
