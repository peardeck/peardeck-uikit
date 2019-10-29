import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconTextBlock = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M0 8h64v10H0zm0 38h64v10H0zm10-19h44v10H10z" />
  </svg>
);

SvgIconTextBlock.defaultProps = defaultProps;
export default SvgIconTextBlock;
