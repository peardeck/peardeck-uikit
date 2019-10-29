import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconSearch = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M62.2 53.8L44.7 36.2C46.8 32.6 48 28.5 48 24 48 10.7 37.3 0 24 0S0 10.7 0 24s10.7 24 24 24c4.5 0 8.6-1.2 12.2-3.3l17.6 17.6c1.2 1.2 2.7 1.8 4.2 1.8s3.1-.6 4.2-1.8c2.4-2.4 2.4-6.2 0-8.5zM8 24c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16S8 32.8 8 24z" />
  </svg>
);

SvgIconSearch.defaultProps = defaultProps;
export default SvgIconSearch;
