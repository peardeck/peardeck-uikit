import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconExtensionQuestion = ({ title, size, ...props }: SvgIconProps) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 63.99 60.08"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <path d="M60.08 0H3.92A4 4 0 0 0 0 3.92v40.21a4 4 0 0 0 3.92 3.92h36.7l11.75 11.74a.92.92 0 0 0 .7.29.61.61 0 0 0 .39-.1 1 1 0 0 0 .61-.9V48.14h6A4 4 0 0 0 64 44.23V4.02A4 4 0 0 0 60.08 0zM43.64 27h-8.81v8.81a2.94 2.94 0 0 1-5.87 0v-8.79h-8.82a2.94 2.94 0 1 1 0-5.87H29v-8.81a2.94 2.94 0 1 1 5.87 0v8.81h8.81a2.94 2.94 0 1 1 0 5.87z" />
  </svg>
);

SvgIconExtensionQuestion.defaultProps = defaultProps;
export default SvgIconExtensionQuestion;
