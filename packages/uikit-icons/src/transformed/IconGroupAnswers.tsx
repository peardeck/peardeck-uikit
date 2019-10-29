import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconGroupAnswers = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M6.4 10.2c0-2.8 2.3-5.1 5.1-5.1h41.1V5c0-2.8-2.3-5.1-5.1-5.1H5.1C2.3 0 0 2.2 0 5v28.9C0 36.7 2.3 39 5.1 39h1.3V10.2z" />
    <path d="M58.9 50H16.5c-2.8 0-5.1-2.3-5.1-5.1V16c0-2.8 2.3-5.1 5.1-5.1h42.4c2.8 0 5.1 2.3 5.1 5.1v28.9c0 2.8-2.3 5.1-5.1 5.1z" />
    <path d="M37.7 64L24.5 47.5h26.4z" />
  </svg>
);

SvgIconGroupAnswers.defaultProps = defaultProps;
export default SvgIconGroupAnswers;
