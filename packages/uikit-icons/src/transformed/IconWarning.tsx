import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconWarning = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M63.2 52.2l-27.5-46c-1.8-3-5.7-3-7.5 0L.7 52.2c-2 3.3.1 7.8 3.7 7.8h55c3.7 0 5.8-4.5 3.8-7.8zM32 17c2 0 3.6 1.7 3.6 3.8 0 1.1-.5 11.8-.7 17.6 0 1.6-1.3 2.9-2.9 2.9-1.5 0-2.8-1.3-2.8-2.9-.3-5.8-.8-16.5-.8-17.6-.1-2.1 1.5-3.8 3.6-3.8zm0 37c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
  </svg>
);

SvgIconWarning.defaultProps = defaultProps;
export default SvgIconWarning;
