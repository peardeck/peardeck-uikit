import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconPlus = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M52.1 38H36.9v15.3c-.2 2.8-2.6 5-5.4 4.8-2.6-.2-4.6-2.2-4.8-4.8V38H11.4c-2.8.2-5.2-2-5.4-4.8s2-5.2 4.8-5.4h16V12.6c-.2-2.8 2-5.2 4.8-5.4s5.2 2 5.4 4.8v15.9h15.3c2.8-.2 5.2 2 5.4 4.8.2 2.8-2 5.2-4.8 5.4-.3-.1-.5-.1-.8-.1z" />
  </svg>
);

SvgIconPlus.defaultProps = defaultProps;
export default SvgIconPlus;
