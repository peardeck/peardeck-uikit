import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconLockOpen = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M52.7 28H27V15c0-2.8 2.2-5 5-5s5 2.2 5 5h10c0-8.3-6.7-15-15-15S17 6.7 17 15v13h-5.7C8.9 28 7 29.9 7 32.3v27.5c0 2.4 1.9 4.3 4.3 4.3h41.5c2.4 0 4.3-1.9 4.3-4.3V32.3c-.1-2.4-2-4.3-4.4-4.3z" />
  </svg>
);

SvgIconLockOpen.defaultProps = defaultProps;
export default SvgIconLockOpen;
