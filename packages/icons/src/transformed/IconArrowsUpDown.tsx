import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconArrowsUpDown = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M15.2 35.3h33.5c5.1 0 7.7 6.2 4.1 9.8L36.1 61.8c-2.3 2.3-5.9 2.3-8.1 0L11.2 45.1c-3.6-3.6-1.1-9.8 4-9.8zm33.6-6.6H15.2c-5.1 0-7.7-6.2-4.1-9.8L27.9 2.2c2.3-2.3 5.9-2.3 8.1 0l16.8 16.7c3.6 3.6 1.1 9.8-4 9.8z" />
  </svg>
);

SvgIconArrowsUpDown.defaultProps = defaultProps;
export default SvgIconArrowsUpDown;
