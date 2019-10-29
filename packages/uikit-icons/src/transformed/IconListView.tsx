import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconListView = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M63 7.1c0 1.8-1.5 3.3-3.3 3.3H22.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h36.9c1.8 0 3.3 1.5 3.3 3.3z" />
    <circle cx={6.5} cy={7.1} r={5.5} />
    <path d="M63 32c0 1.8-1.5 3.3-3.3 3.3H22.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h36.9c1.8 0 3.3 1.5 3.3 3.3z" />
    <circle cx={6.5} cy={32} r={5.5} />
    <path d="M63 56.9c0 1.8-1.5 3.3-3.3 3.3H22.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3h36.9c1.8 0 3.3 1.5 3.3 3.3z" />
    <circle cx={6.5} cy={56.9} r={5.5} />
  </svg>
);

SvgIconListView.defaultProps = defaultProps;
export default SvgIconListView;
