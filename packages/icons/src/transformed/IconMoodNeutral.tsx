import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconMoodNeutral = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="-1 -1 66 66" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M32 8c13.2 0 24 10.8 24 24S45.2 56 32 56 8 45.2 8 32 18.8 8 32 8m0-8C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0z" />
    <circle cx={24} cy={25} r={6} />
    <circle cx={40} cy={25} r={6} />
    <path d="M43 46H21c-2.2 0-4-1.8-4-4s1.8-4 4-4h22c2.2 0 4 1.8 4 4s-1.8 4-4 4z" />
  </svg>
);

SvgIconMoodNeutral.defaultProps = defaultProps;
export default SvgIconMoodNeutral;
