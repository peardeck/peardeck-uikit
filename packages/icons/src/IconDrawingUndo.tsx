import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingUndo = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 56.7 57.8" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M41.5 56.9c-1.5-.9-2.5-2.3-2.7-4-.2-1.2 0-2.5.6-3.6 1.1-2.2 2.6-6.3-.2-9.4-1.9-2-4.4-3.4-7.2-4l.9 2.2c.9 2.4-.3 5.1-2.7 6-1.1.4-2.4.4-3.5-.1l-24-11.2C.4 31.7-.7 29 .4 26.6l11.2-24c1.2-2.3 4-3.2 6.3-2 1.1.5 1.9 1.4 2.3 2.6l1.1 4.5c11.9-1.8 23.2 2.3 30 11.2 7.7 10.1 7.4 23.7-.8 35.5-1 1.4-2.4 2.5-4 3.1-1.8.5-3.6.3-5-.6zM19.6 14.1l-2 .5c-.5.2-1.1-.1-1.2-.7l-1-4.3c0-.1-.2-.1-.2-.1l-.1.1-8.3 17.7c-.1.3 0 .7.3.9l18.2 8.5c.1 0 .2 0 .3-.1v-.2l-2.1-5.3c-.2-.4 0-.9.5-1.1.1 0 .1 0 .2-.1l2.9-.3c6.2-.6 12.3 1.7 16.6 6.1 3.1 3.4 4 8.2 2.4 13.1-.1.1 0 .2.1.3.1.1.2 0 .3-.1 5.5-9.1 5.5-19-.1-26.5-4.5-6-11.7-9.2-19.7-9.2-2.4 0-4.8.3-7.1.8zM5.3 27.3z" />
  </svg>
);

SvgIconDrawingUndo.defaultProps = defaultProps;
export default SvgIconDrawingUndo;
