import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconLockedSpinner = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 68 68" width={size} height={size} {...props}>
    <title>{title}</title>
    <path
      className="icon-locked-spinner_svg__locked-spinner"
      d="M53.1 27v-5.8c0-10.5-8.6-19.1-19.1-19.1s-19.1 8.6-19.1 19.1V27h-2.5c-1.4 0-2.5 1.1-2.5 2.4v33.7c-.1 1.4 1 2.5 2.4 2.6H55.6c1.4 0 2.5-1.1 2.5-2.4V29.5c0-1.4-1.1-2.5-2.4-2.5h-2.6zm-7 0H21.9v-5.8c0-8.1 5-12.8 13.4-12.1 7.3.7 10.8 5.1 10.8 12.5V27z"
    />
    <path
      className="icon-locked-spinner_svg__locked-spinner-outline"
      d="M53.1 27.1v-5.8c0-10.5-8.6-19.1-19.1-19.1s-19.1 8.6-19.1 19.1v5.8h-2.5c-1.4 0-2.5 1.1-2.5 2.4v33.7c-.1 1.4 1 2.5 2.4 2.6H55.6c1.4 0 2.5-1.1 2.5-2.4V29.6c0-1.4-1.1-2.5-2.4-2.5h-2.6zm-7 0H21.9v-5.8c0-8.1 5-12.8 13.4-12.1 7.3.7 10.8 5.1 10.8 12.5v5.4z"
    />
  </svg>
);

SvgIconLockedSpinner.defaultProps = defaultProps;
export default SvgIconLockedSpinner;
