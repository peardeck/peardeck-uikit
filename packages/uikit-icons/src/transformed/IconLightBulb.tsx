import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconLightBulb = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 62.39 63" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M47.47 15.51C40 8.08 27.11 6.7 18.93 14.89c-5.09 5.12-6.38 10.41-7.12 14.75S10.75 37.11 8 39.82l-6.5 6.51a5.38 5.38 0 000 7.56C0 56.01 7 62.94 9.06 61.4h.05a5.38 5.38 0 007.56 0l6.52-6.39c2.71-2.75 5.81-3 10.18-3.8s9.66-2 14.75-7.12c8.15-8.19 6.77-21.08-.65-28.58zm-34 42.67a.74.74 0 01-1 0l-7.6-7.53a.74.74 0 010-1l4.99-5.14 8.64 8.64zm31.38-17.33c-4.29 4.29-8.13 5.16-12.27 5.86-3.53.61-7.44 1-10.9 3.54l-8.91-8.91c2.5-3.47 2.94-7.38 3.54-10.9.71-4.14 1.57-8 5.86-12.27 6.28-6.28 16.31-5.12 22.06.62s6.9 15.78.62 22.06zm7.61-33.09l-2.7 2.75a2.036 2.036 0 102.88 2.88l2.71-2.71a2.036 2.036 0 10-2.88-2.88z" />
    <path d="M61.82 28.33a1.93 1.93 0 00-1.37-.56h-2.92a1.94 1.94 0 100 3.87h2.92a1.94 1.94 0 001.37-3.31zM15 14.2a2.036 2.036 0 102.88-2.88l-2.69-2.71a2.044 2.044 0 00-2.88 2.9z" />
    <path
      className="icon-light-bulb_svg__icon-light-bulb_svg__a"
      d="M51.79 45.21a2.036 2.036 0 00-2.88 2.88l2.71 2.71a2.036 2.036 0 102.88-2.88z"
    />
    <path d="M33.4 6.79a1.93 1.93 0 001.93-1.93V1.94A1.94 1.94 0 0032 .57a1.93 1.93 0 00-.56 1.37v2.92a1.93 1.93 0 001.93 1.93z" />
  </svg>
);

SvgIconLightBulb.defaultProps = defaultProps;
export default SvgIconLightBulb;
