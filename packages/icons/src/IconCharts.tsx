import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconCharts = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 62 40.77" width={size} height={size} {...props}>
    <title>{title}</title>
    <path
      className="icon-charts_svg__a"
      d="M59.98 36.73h-7.75V26.34a3.43 3.43 0 0 0-3.43-3.43h-5.27a3.43 3.43 0 0 0-3.43 3.43v10.39h-3.35V3.43A3.43 3.43 0 0 0 33.32 0h-5.29a3.43 3.43 0 0 0-3.43 3.43v33.3h-3.37V14.88a3.43 3.43 0 0 0-3.43-3.43h-5.27a3.43 3.43 0 0 0-3.43 3.43v21.85H2.02a2 2 0 0 0 0 4h58a2 2 0 0 0 0-4zm-15.84-9.77h4v8.76h-4zM28.64 4.04h4v31.68h-4zM13.14 15.5h4v20.22h-4z"
    />
  </svg>
);

SvgIconCharts.defaultProps = defaultProps;
export default SvgIconCharts;
