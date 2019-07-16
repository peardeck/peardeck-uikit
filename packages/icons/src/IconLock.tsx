import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconLock = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M52.7 28H47V15c0-8.3-6.7-15-15-15S17 6.7 17 15v13h-5.7C8.9 28 7 29.9 7 32.3v27.5c0 2.4 1.9 4.3 4.3 4.3h41.5c2.4 0 4.3-1.9 4.3-4.3V32.3c-.1-2.4-2-4.3-4.4-4.3zM27 28V15c0-2.8 2.2-5 5-5s5 2.2 5 5v13H27z" />
    <defs>
      <path
        id="icon-lock_svg__a"
        d="M13.1 205.5H.9v-2.9c0-4.1 2.5-6.4 6.8-6.1 3.7.3 5.5 2.6 5.5 6.3l-.1 2.7z"
      />
    </defs>
    <clipPath id="icon-lock_svg__b">
      <use xlinkHref="#icon-lock_svg__a" overflow="visible" />
    </clipPath>
    <path
      d="M16.6 205.5v-2.9c0-5.3-4.3-9.6-9.6-9.6s-9.6 4.3-9.6 9.6v2.9h-1.3c-.7 0-1.3.5-1.3 1.2v16.9c0 .7.5 1.3 1.2 1.3H17.9c.7 0 1.3-.5 1.3-1.2v-16.9c0-.7-.5-1.3-1.2-1.3h-1.4z"
      clipPath="url(#icon-lock_svg__b)"
    />
  </svg>
);

SvgIconLock.defaultProps = defaultProps;
export default SvgIconLock;
