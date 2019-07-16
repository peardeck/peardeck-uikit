import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconStudentLockOpen = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M34.2 36.1c-1.7-1.4-3.7-2.5-5.8-3.3 1.8-1.8 3.2-4.6 3.7-8.5.8.1 1.9-.7 2.2-2.2.4-1.5 1-3.9.2-4.2-.2-.1-.6 0-.6.1v-4c0-4.4-.6-8.8-5.4-10.6-.8-1.8-1-3.4-1-3.4-2.1 2-10.4 2.9-10.4 2.9h.1C7 3.9 8 7.6 8 14v4.1c0-.1-.3-.2-.5-.1-.8.2-.4 2.6-.1 4.1.3 1.4 1.7 2.4 2.5 2.3.6 4 1.8 6.7 3.5 8.5C5.6 35.8 0 43.2 0 52h31V42c0-2.5 1.3-4.7 3.2-5.9zM60 38H45v-8.5c0-2.2 1.8-4.2 4.1-4.2 2.2 0 4.1 1.8 4.1 3.8h6c0-5-4.5-9.8-10.1-9.8S39 24 39 29.5V38h-1c-.5 0-1 .1-1.5.3-1.5.6-2.5 2-2.5 3.7v18c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V42c0-2.2-1.8-4-4-4z" />
  </svg>
);

SvgIconStudentLockOpen.defaultProps = defaultProps;
export default SvgIconStudentLockOpen;
