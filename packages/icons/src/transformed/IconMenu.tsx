import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconMenu = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M64 12c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4h56c2.2 0 4 1.8 4 4v6zm0 23c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h56c2.2 0 4 1.8 4 4v6zm0 23c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h56c2.2 0 4 1.8 4 4v6z" />
  </svg>
);

SvgIconMenu.defaultProps = defaultProps;
export default SvgIconMenu;
