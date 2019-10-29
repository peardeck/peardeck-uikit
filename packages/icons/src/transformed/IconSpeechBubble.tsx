import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconSpeechBubble = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    className="icon-speech-bubble_svg__icon-speech-bubble_svg__speech-bubble"
    viewBox="0 0 64.78 57.06"
    width={size}
    height={size}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      className="icon-speech-bubble_svg__icon-speech-bubble_svg__speech-bubble-fill"
      d="M57.49 1.53H7.29A5.81 5.81 0 001.5 7.32v29a5.81 5.81 0 005.79 5.72h32.82l13.52 13.49V42.04h3.86a5.81 5.81 0 005.79-5.79v-29a5.81 5.81 0 00-5.79-5.72z"
    />
  </svg>
);

SvgIconSpeechBubble.defaultProps = defaultProps;
export default SvgIconSpeechBubble;
