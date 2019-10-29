import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconPause = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M27 60c0 2.2-1.8 4-4 4H13c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v56zm28 0c0 2.2-1.8 4-4 4H41c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v56z" />
  </svg>
);

SvgIconPause.defaultProps = defaultProps;
export default SvgIconPause;
