import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconGear = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M60.6 26.4h-6.5c-.5-2.6-1.6-5-3.1-7.4l4.7-4.8c.8-.8.8-2.1 0-2.9L51 6.5c-.8-.8-2.1-.8-2.9 0l-4.7 4.8c-1.8-1.1-4.2-2.1-6.8-2.9V2.1c0-1.3-.8-2.1-2.1-2.1H28c-1 0-1.8.8-1.8 2.1v6.6c-2.6.5-5 1.6-7.3 2.9l-4.4-4.8c-.8-.8-2.1-.8-2.9 0l-4.7 4.8c-.8.8-.8 2.1 0 2.9l4.7 4.8c-1.3 2.1-2.4 4.5-3.1 7.1H2.1c-1.3 0-2.1.8-2.1 2.1v6.6C0 36.2.8 37 2.1 37h6.5c.5 2.6 1.6 5 3.1 7.4L7 49.2c-.8.8-.8 2.1 0 2.9l4.7 4.8c.8.8 2.1.8 2.9 0l4.7-4.8c2.1 1.3 4.7 2.4 7.3 3.2v6.6c0 1.1.8 2.1 2.1 2.1h6.5c1 0 2.1-.8 2.1-2.1v-6.6c2.6-.5 5-1.6 7.3-3.2l4.7 4.8c.8.8 2.1.8 2.9 0l4.7-4.8c.8-.8.8-2.1 0-2.9l-4.7-4.8c1.3-2.1 2.4-4.8 3.1-7.4h6.5c1 0 2.1-.8 2.1-2.1v-6.6c-1.2-1.1-2-1.9-3.3-1.9zM31.3 42.3c-5.7 0-10.4-4.8-10.4-10.6s4.7-10.6 10.4-10.6 10.4 4.8 10.4 10.6-4.6 10.6-10.4 10.6z" />
  </svg>
);

SvgIconGear.defaultProps = defaultProps;
export default SvgIconGear;
