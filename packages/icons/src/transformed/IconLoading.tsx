import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconLoading = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 48 48" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      fill="#8D8B88"
      d="M24 43C13.5 43 5 34.5 5 24S13.5 5 24 5V0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24h-5c0 10.5-8.5 19-19 19z"
    />
    <path
      fill="#C9DE55"
      d="M24 0v5c10.5 0 19 8.5 19 19h5C48 10.8 37.2 0 24 0z"
    />
  </svg>
);

SvgIconLoading.defaultProps = defaultProps;
export default SvgIconLoading;
