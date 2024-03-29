import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconStudentResponseClosed = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M33 35c-1.4-.9-2.8-1.7-4.4-2.3 1.8-1.8 3.2-4.6 3.7-8.5.8.1 1.9-.7 2.2-2.2.4-1.5.9-3.9.1-4.2-.2-.1-.6 0-.6.1v-4c0-4.4-.5-8.8-5.3-10.6-.8-1.8-1-3.3-1-3.3-2.1 2-10.3 3-10.3 3h.1C7.2 4 8 7.6 8 14v4.1c0-.1-.2-.2-.4-.1-.8.2-.4 2.6 0 4.1.3 1.4 1.7 2.4 2.5 2.3.6 4 1.8 6.7 3.5 8.5C5.8 35.8.2 43 .2 52h28.4c-.3-1-.4-2.6-.4-4 0-5 1.8-9.5 4.8-13zm15-3c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM36 48c0-6.6 5.4-12 12-12 2.6 0 5 .8 6.9 2.2L38.2 54.9C36.8 53 36 50.6 36 48zm12 12c-2.6 0-5-.8-6.9-2.2l16.7-16.7c1.4 2 2.2 4.4 2.2 6.9 0 6.6-5.4 12-12 12z" />
  </svg>
);

SvgIconStudentResponseClosed.defaultProps = defaultProps;
export default SvgIconStudentResponseClosed;
