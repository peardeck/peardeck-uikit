import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconMoodNegative = ({
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
    <path d="M43 47c-.8 0-1.6-.2-2.3-.7-2.5-1.8-5.5-2.8-8.7-2.8s-6.1 1-8.7 2.8c-1.8 1.3-4.3.9-5.6-.9-1.3-1.8-.9-4.3.9-5.6 3.9-2.8 8.5-4.2 13.3-4.2s9.4 1.5 13.3 4.2c1.8 1.3 2.2 3.8.9 5.6-.6 1-1.9 1.6-3.1 1.6z" />
  </svg>
);

SvgIconMoodNegative.defaultProps = defaultProps;
export default SvgIconMoodNegative;
