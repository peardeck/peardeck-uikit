import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconEmail = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M64 12c0-2.2-1.8-4-4-4H4c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V12zM6 17.4L21.2 31 6 46.2V17.4zm26 18.1L8.1 14H56L32 35.5zm-7.8-1.8l6.5 5.8c.3.4.8.5 1.3.5s1-.2 1.3-.5l6.5-5.8L56 50H8l16.2-16.3zM42.8 31L58 17.4v28.8L42.8 31z" />
  </svg>
);

SvgIconEmail.defaultProps = defaultProps;
export default SvgIconEmail;
