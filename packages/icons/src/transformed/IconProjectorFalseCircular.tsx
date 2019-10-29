import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconProjectorFalseCircular = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M46 18h-8.8c0-1.1-.9-2-2-2h-6.5c-1.1 0-2 .9-2 2H18c-1.1 0-2 .9-2 2s.9 2 2 2h.5v17.5c0 1.4 1.1 2.5 2.5 2.5h5.6l-2.9 2.5-.1.1c-.8.7-.9 1.9-.1 2.7.4.4.9.7 1.5.7.5 0 .9-.2 1.3-.5l5.7-4.9 5.7 4.9c.4.3.8.5 1.3.5.6 0 1.1-.3 1.5-.7.7-.8.7-2.1-.2-2.8L37.4 42H43c1.4 0 2.5-1.1 2.5-2.5V22h.5c1.1 0 2-.9 2-2s-.9-2-2-2zm-4.5 20h-19V22h19v16z" />
  </svg>
);

SvgIconProjectorFalseCircular.defaultProps = defaultProps;
export default SvgIconProjectorFalseCircular;
