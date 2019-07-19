import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconNoAnswer = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M53.1 38.5H10.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h42.2c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5z" />
  </svg>
);

SvgIconNoAnswer.defaultProps = defaultProps;
export default SvgIconNoAnswer;
