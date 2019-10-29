import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconOnSlide = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 63 60.3" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M31.5 2C18.9 2 8.7 12.2 8.7 24.8c0 17.1 22.8 34.1 22.8 34.1s22.8-17.1 22.8-34.1C54.3 12.2 44.1 2 31.5 2zm0 30.8c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6z" />
  </svg>
);

SvgIconOnSlide.defaultProps = defaultProps;
export default SvgIconOnSlide;
