import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconLinkLoadingCheckmark = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60.53 43.46" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M7 19.4l17.06 17.06L53.52 7" />
  </svg>
);

SvgIconLinkLoadingCheckmark.defaultProps = defaultProps;
export default SvgIconLinkLoadingCheckmark;
