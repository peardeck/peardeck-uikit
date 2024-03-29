import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconQq = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M60 4H4C1.8 4 0 5.8 0 8v40c0 2.2 1.8 4 4 4h36.6l11.7 11.7c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.2.6-.5.6-.9V52h6c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM31.6 46c-2.4 0-4.4-1.9-4.4-4.2 0-2.3 2-4.2 4.4-4.2 2.4 0 4.4 1.9 4.4 4.2 0 2.3-2 4.2-4.4 4.2zM34 30.8c0 .7.2.9.2 1.4 0 1.3-1 2.8-3 2.8-2.1 0-3.8-1.7-3.8-4.9 0-6.2 7.9-7 7.9-10.6 0-1.6-1.2-3-4.2-3-1.6 0-3.1.5-4.4 1.4-.7.4-1.5.6-2.3.6-1.7 0-3.2-1.2-3.2-3 0-.5.1-1 .3-1.4C23 11.3 28.4 10 31.9 10c7 0 11.3 3.4 11.3 8.3-.2 7.6-9.2 8.2-9.2 12.5z" />
  </svg>
);

SvgIconQq.defaultProps = defaultProps;
export default SvgIconQq;
