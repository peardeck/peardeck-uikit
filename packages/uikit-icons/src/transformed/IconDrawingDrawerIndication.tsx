import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingDrawerIndication = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 53.99 53.99" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M46.72 52.73L1.26 7.27a4.25 4.25 0 013-7.27h45.47a4.26 4.26 0 014.26 4.26v45.46a4.25 4.25 0 01-7.27 3.01z" />
  </svg>
);

SvgIconDrawingDrawerIndication.defaultProps = defaultProps;
export default SvgIconDrawingDrawerIndication;
