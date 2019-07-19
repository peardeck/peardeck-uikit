import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMoodPositive = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="-1 -1 66 66" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M32 8c13.2 0 24 10.8 24 24S45.2 56 32 56 8 45.2 8 32 18.8 8 32 8m0-8C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0z" />
    <circle cx={24} cy={25} r={6} />
    <circle cx={40} cy={25} r={6} />
    <path d="M32 51c7.5 0 14-4.3 17.1-10.6 1-2-.4-4.4-2.7-4.4H17.6c-2.2 0-3.7 2.3-2.7 4.4C18 46.7 24.5 51 32 51z" />
  </svg>
);

SvgIconMoodPositive.defaultProps = defaultProps;
export default SvgIconMoodPositive;
