import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconShapeStar = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 61.02 58.3" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M41.1 18.55l18.8 2.8a1.34 1.34 0 01.7 2.3l-13.7 13.2a1.29 1.29 0 00-.4 1.2l3.1 18.7a1.32 1.32 0 01-1.9 1.4L31 49.25a1.27 1.27 0 00-1.2 0L13 57.95a1.3 1.3 0 01-1.9-1.4l3.2-18.7a1.37 1.37 0 00-.4-1.2L.4 23.35a1.37 1.37 0 01.7-2.3l18.8-2.6a1.45 1.45 0 001-.7l8.5-17a1.34 1.34 0 012.4 0l8.3 17.1a1.45 1.45 0 001 .7z" />
  </svg>
);

SvgIconShapeStar.defaultProps = defaultProps;
export default SvgIconShapeStar;
