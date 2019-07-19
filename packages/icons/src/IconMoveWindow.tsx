import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMoveWindow = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M55.403 48.959a2.285 2.285 0 0 1 2.285 2.285v4.07a2.285 2.285 0 0 1-2.285 2.286H3.286A2.285 2.285 0 0 1 1 55.314V3.2A2.286 2.286 0 0 1 3.286.914h52.117A2.286 2.286 0 0 1 57.688 3.2V20.559a2.285 2.285 0 0 1-2.285 2.286H5.57v30.183h47.546v-1.784a2.285 2.285 0 0 1 2.286-2.285zM5.57 18.274h47.546V5.648H5.571v12.626z" />
    <path d="M11.962 9.065a2.895 2.895 0 1 0 0 5.79 2.895 2.895 0 0 0 0-5.79M19.276 9.065a2.895 2.895 0 1 0 0 5.79 2.895 2.895 0 0 0 0-5.79M26.754 9.065a2.896 2.896 0 1 0 0 5.791 2.896 2.896 0 0 0 0-5.79M56.082 27.641a2.287 2.287 0 0 0-3.233 3.233l3.435 3.434h-17.96a2.285 2.285 0 1 0 0 4.571h17.758l-3.66 4.028a2.286 2.286 0 0 0 3.66 2.64l7.337-7.337a2.286 2.286 0 0 0 0-3.233l-7.337-7.336z" />
  </svg>
);

SvgIconMoveWindow.defaultProps = defaultProps;
export default SvgIconMoveWindow;
