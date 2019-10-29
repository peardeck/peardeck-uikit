import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconThoughtBubbleOutlined = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 63.09 59.2" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      className="icon-thought-bubble-outlined_svg__icon-thought-bubble-outlined_svg__tbubble01"
      d="M54.75 21.51a9.69 9.69 0 00-9.39-9.68A9.67 9.67 0 0033.5 6.61a12.79 12.79 0 00-20.9 4.69 9.69 9.69 0 00-3.73 18.6 9.65 9.65 0 0011.93 8.13 12.76 12.76 0 0015.94-1 9.69 9.69 0 0013.3-7.28 9.68 9.68 0 004.71-8.24z"
    />
    <circle
      className="icon-thought-bubble-outlined_svg__icon-thought-bubble-outlined_svg__tbubble02"
      cx={52.75}
      cy={48.86}
      r={7.34}
    />
  </svg>
);

SvgIconThoughtBubbleOutlined.defaultProps = defaultProps;
export default SvgIconThoughtBubbleOutlined;
