import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconGrid = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M18 14c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zm23 0c0 2.2-1.8 4-4 4H27c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zm23 0c0 2.2-1.8 4-4 4H50c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zM18 60c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V50c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zm23 0c0 2.2-1.8 4-4 4H27c-2.2 0-4-1.8-4-4V50c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zm23 0c0 2.2-1.8 4-4 4H50c-2.2 0-4-1.8-4-4V50c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zM18 37c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V27c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zm23 0c0 2.2-1.8 4-4 4H27c-2.2 0-4-1.8-4-4V27c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10zm23 0c0 2.2-1.8 4-4 4H50c-2.2 0-4-1.8-4-4V27c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v10z" />
  </svg>
);

SvgIconGrid.defaultProps = defaultProps;
export default SvgIconGrid;
