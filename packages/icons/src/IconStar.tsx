import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconStar = ({ title, size, ...props }: SvgIconProps) => (
  <svg
    className="icon-star_svg__icon--star"
    data-name="Layer 1"
    viewBox="0 0 63.02 60.26"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <path
      className="icon-star_svg__star-stroke"
      d="M42.12 19.55l18.77 2.83a1.33 1.33 0 0 1 .72 2.27l-13.67 13.2a1.33 1.33 0 0 0-.43 1.14l3.1 18.72a1.33 1.33 0 0 1-1.93 1.39l-16.71-8.92a1.33 1.33 0 0 0-1.24 0l-16.84 8.73a1.33 1.33 0 0 1-1.92-1.41l3.32-18.65a1.33 1.33 0 0 0-.38-1.18L1.39 24.31a1.33 1.33 0 0 1 .75-2.26l18.8-2.62a1.33 1.33 0 0 0 1-.72l8.49-17a1.33 1.33 0 0 1 2.38 0l8.31 17.14a1.33 1.33 0 0 0 1 .7z"
    />
  </svg>
);

SvgIconStar.defaultProps = defaultProps;
export default SvgIconStar;
