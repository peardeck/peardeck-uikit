import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingText = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 57.7 54.6" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M40 53.6H17.5c-3.8-.3-6.8-3.4-7-7.2v-.2c0-4 3.9-7.2 7.3-7.2H21V16h-4.9v.1c-.2 3.8-3.2 6.8-7 7-4 .2-7.4-2.9-7.6-7V8.3c0-3.8 3.1-6.8 6.8-6.8h41.1c3.8 0 6.8 3.1 6.8 6.8v7.9c-.2 3.8-3.2 6.8-7 7-1.9.1-3.8-.6-5.2-1.9-1.4-1.3-2.3-3.1-2.4-5.1V16h-4.9v23h3.5c3.7.4 6.7 3.3 6.9 7.1v.2c.1 4.2-3.8 7.3-7.1 7.3zm-22.1-6H40c.4-.1 1.1-.7 1.2-1.1-.1-.7-.7-1.3-1.4-1.4h-9V10h16.9v6c0 .4.3.7.4.8.1.1.5.4.9.3.7 0 1.2-.5 1.2-1.2V8.3c0-.4-.4-.8-.8-.8H8.3c-.5 0-.8.4-.8.8V16c0 .4.3.7.4.8.1.2.5.4.9.4.7 0 1.2-.5 1.2-1.2v-6h17v35h-9.2c-.4 0-1.2.7-1.3 1.1.1.8.7 1.4 1.4 1.5z" />
  </svg>
);

SvgIconDrawingText.defaultProps = defaultProps;
export default SvgIconDrawingText;
