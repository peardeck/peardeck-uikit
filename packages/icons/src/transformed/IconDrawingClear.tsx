import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingClear = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 52.7 62.2" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M46.4 11.2H35.7v-.6c0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4v.6H6.4c-2.8 0-5 2.3-5 5v5.3c0 2.4 1.7 4.5 4 4.9L7 57.1c.1 2.7 2.4 4.8 5 4.8h28.9c2.7 0 4.9-2.1 5-4.8l1.6-30.7c2.3-.5 4-2.5 4-4.9v-5.3c0-2.7-2.3-5-5.1-5zm-20.1-4c1.8 0 3.3 1.5 3.4 3.3H23c0-1.8 1.5-3.3 3.3-3.3zm19.2 10v3H7.3v-3h38.2zM39.9 56h-27l-1.5-29.4h30.1L39.9 56z" />
    <path d="M17.5 29.2c-1.7.1-2.9 1.5-2.8 3.1l.9 16.8c.1 1.6 1.4 2.8 3 2.8h.2c1.7-.1 2.9-1.5 2.8-3.1l-1-16.8c-.1-1.6-1.5-2.9-3.1-2.8zm18.4 0c-1.6-.1-3.1 1.2-3.1 2.8l-.9 16.8c-.1 1.7 1.2 3.1 2.8 3.1h.2c1.6 0 2.9-1.2 3-2.8l.9-16.8c0-1.6-1.2-3-2.9-3.1zm-9.2.7c-1.7 0-3 1.3-3 3v15.4c0 1.7 1.3 3 3 3s3-1.3 3-3V32.9c0-1.7-1.4-3-3-3z" />
  </svg>
);

SvgIconDrawingClear.defaultProps = defaultProps;
export default SvgIconDrawingClear;
