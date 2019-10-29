import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingRedo = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60 60" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M14 58.8c-.6 0-1.3-.1-1.9-.3-1.7-.6-3.1-1.7-4.1-3.1C-.2 43.6-.5 30 7.2 19.9c6.8-8.9 18-13.1 30-11.2l1.1-4.5c.4-1.1 1.2-2 2.3-2.6 1.1-.6 2.4-.7 3.5-.3 1.2.4 2.1 1.2 2.7 2.3L58 27.7c.5 1.1.6 2.4.1 3.5-.4 1.2-1.3 2.1-2.4 2.6L31.8 45c-1.2.5-2.4.5-3.5.1-2.4-.9-3.6-3.6-2.8-6l.9-2.2c-3 .7-5.6 2.3-7.2 4-2.8 3.1-1.3 7.2-.2 9.4.6 1.2.8 2.4.6 3.6-.3 1.7-1.3 3.2-2.7 4-.9.7-1.9.9-2.9.9zm17.7-44.4c-8 0-15.1 3.3-19.7 9.2-5.6 7.5-5.6 17.4-.1 26.6.1.2.5.1.4-.2-1.5-5-.7-9.7 2.4-13.1 3.3-3.6 9.7-6.9 16.6-6.1l2.9.3c.5.1.9.6.7 1.1l-2.1 5.3c-.1.2.1.3.3.2l18.2-8.5c.3-.2.5-.5.3-.9l-8.2-17.7c-.1-.2-.3-.1-.4 0L42 15c-.1.5-.6.8-1.2.7l-2-.5c-2.4-.6-4.8-.8-7.1-.8zm21.4 14z" />
  </svg>
);

SvgIconDrawingRedo.defaultProps = defaultProps;
export default SvgIconDrawingRedo;
