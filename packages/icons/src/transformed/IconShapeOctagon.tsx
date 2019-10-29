import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconShapeOctagon = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60 60" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M42.43 0H17.57L0 17.57v24.86L17.57 60h24.86L60 42.43V17.57L42.43 0z" />
  </svg>
);

SvgIconShapeOctagon.defaultProps = defaultProps;
export default SvgIconShapeOctagon;
