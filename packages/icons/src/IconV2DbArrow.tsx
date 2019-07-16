import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconV2DbArrow = ({ title, size, ...props }: SvgIconProps) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <path d="M20.73 32a4.49 4.49 0 0 0 1.33 3.23L26.77 40l7.17 7.17a3 3 0 0 0 2.15.92 3 3 0 0 0 2.15-.92 3.47 3.47 0 0 0 0-4.71l-3.48-3.69-3.38-3.67-3.07-3.1 3.07-3 3.48-3.69 3.48-3.69a3.47 3.47 0 0 0 0-4.71 3 3 0 0 0-2.15-.91 3 3 0 0 0-2.15.92L26.88 24l-4.71 4.71A4.59 4.59 0 0 0 20.73 32zM64 32A32 32 0 1 1 32 0a32 32 0 0 1 32 32z" />
  </svg>
);

SvgIconV2DbArrow.defaultProps = defaultProps;
export default SvgIconV2DbArrow;
