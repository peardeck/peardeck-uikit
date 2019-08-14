import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconLockOpenCircular = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <path d="M64 32A32 32 0 1132 0a32 32 0 0132 32zM41.53 21.3c.47-4.47-4.68-8.31-9.55-8.31a9.63 9.63 0 00-9.6 9.64v2.9h-1.27a1.27 1.27 0 00-1.27 1.27v16.92a1.27 1.27 0 001.27 1.27h21.78a1.27 1.27 0 001.27-1.27V26.8a1.27 1.27 0 00-1.27-1.27h-17v-2.9c0-4.1 2.52-6.45 6.75-6.08 3.29.29 4.84 1.89 5.37 5.08.09.68 3.44.42 3.52-.33z" />
  </svg>
);

SvgIconLockOpenCircular.defaultProps = defaultProps;
export default SvgIconLockOpenCircular;
