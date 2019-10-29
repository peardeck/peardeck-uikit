import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconLinkLoadingSpinner = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    className="icon-link-loading-spinner_svg__icon-link-loading-spinner_svg__link-loading__spinner"
    viewBox="0 0 66 66"
    width={size}
    height={size}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <defs />
    <circle
      className="icon-link-loading-spinner_svg__icon-link-loading-spinner_svg__link-loading__spinner__path"
      fill="none"
      cx={33}
      cy={33}
      r={30}
    />
  </svg>
);

SvgIconLinkLoadingSpinner.defaultProps = defaultProps;
export default SvgIconLinkLoadingSpinner;
