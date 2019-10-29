import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconDrawingPencil = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60.4 60.5" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M56.6 6.8l-2.9-2.9C50.2.4 44.5.3 41 3.8L6.2 38.6c-1.2 1.2-1.9 2.6-2.3 4.2l-2.7 13c-.2.9.1 1.9.8 2.6.5.5 1.2.8 2 .9.2 0 .4 0 .6-.1l13-2.7c1.6-.3 3.1-1.1 4.2-2.3l34.7-34.7c3.6-3.5 3.6-9.1.1-12.7zm-6.3 12.4L18.9 50.6 16 47.7l31.3-31.4 3 2.9zM9.9 41.6l31.3-31.4 2.9 2.9-31.3 31.3-2.9-2.8zm4.3 10.8l-5.3 1.1-2-2L8 46.2l6.2 6.2zm39.3-36.5l-9-9c1.7-1.4 4.2-1.3 5.8.3l2.9 2.9c1.6 1.6 1.7 4.1.3 5.8z" />
  </svg>
);

SvgIconDrawingPencil.defaultProps = defaultProps;
export default SvgIconDrawingPencil;
