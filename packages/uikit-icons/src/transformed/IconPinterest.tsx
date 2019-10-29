import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconPinterest = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 56 56" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M28 0a28 28 0 00-11.24 53.65 24.58 24.58 0 01.49-6.43l3.6-15.26a10.71 10.71 0 01-.9-4.43c0-4.15 2.41-7.25 5.4-7.25 2.55 0 3.78 1.91 3.78 4.2 0 2.56-1.63 6.39-2.47 9.94a4.33 4.33 0 004.42 5.39c5.3 0 8.88-6.81 8.88-14.88 0-6.14-4.14-10.73-11.65-10.73-8.5 0-13.79 6.33-13.79 13.4a8.09 8.09 0 001.85 5.5 1.35 1.35 0 01.4 1.56c-.13.51-.44 1.75-.57 2.24a1 1 0 01-1.4.71c-3.91-1.6-5.74-5.89-5.74-10.7 0-7.95 6.71-17.49 20-17.49 10.68 0 17.72 7.73 17.72 16 0 11-6.1 19.19-15.11 19.19-3 0-5.86-1.64-6.84-3.49 0 0-1.62 6.45-2 7.69a23.36 23.36 0 01-2.81 6 27.65 27.65 0 007.93 1.15 28 28 0 000-56z" />
  </svg>
);

SvgIconPinterest.defaultProps = defaultProps;
export default SvgIconPinterest;
