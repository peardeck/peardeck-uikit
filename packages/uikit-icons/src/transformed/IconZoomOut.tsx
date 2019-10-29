import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconZoomOut = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      fill="none"
      d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm11 20H13v-8h22v8z"
    />
    <path d="M62.2 53.8L44.7 36.2C46.8 32.6 48 28.5 48 24 48 10.7 37.3 0 24 0S0 10.7 0 24s10.7 24 24 24c4.5 0 8.6-1.2 12.2-3.3l17.6 17.6c1.2 1.2 2.7 1.8 4.2 1.8s3.1-.6 4.2-1.8c2.4-2.4 2.4-6.2 0-8.5zM24 40c-8.8 0-16-7.2-16-16S15.2 8 24 8s16 7.2 16 16-7.2 16-16 16z" />
    <path d="M13 20h22v8H13z" />
  </svg>
);

SvgIconZoomOut.defaultProps = defaultProps;
export default SvgIconZoomOut;
