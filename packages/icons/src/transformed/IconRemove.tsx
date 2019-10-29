import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconRemove = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      fill="#A8494A"
      d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"
    />
    <path
      fill="#D95B5D"
      d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.92 11-11S18.08 1 12 1zm4.98 13.71a1.6 1.6 0 010 2.27c-.31.31-.72.47-1.13.47-.41 0-.82-.16-1.13-.47L12 14.27l-2.71 2.71c-.31.31-.72.47-1.13.47s-.82-.16-1.13-.47a1.6 1.6 0 010-2.27L9.73 12 7.02 9.29a1.6 1.6 0 010-2.27 1.6 1.6 0 012.27 0L12 9.73l2.71-2.71a1.6 1.6 0 012.27 0 1.6 1.6 0 010 2.27L14.27 12l2.71 2.71z"
    />
    <path
      fill="#FFF"
      d="M16.98 7.02a1.6 1.6 0 00-2.27 0L12 9.73 9.29 7.02a1.6 1.6 0 00-2.27 0 1.6 1.6 0 000 2.27L9.73 12l-2.71 2.71a1.6 1.6 0 000 2.27 1.621 1.621 0 002.28 0l2.7-2.71 2.71 2.71a1.621 1.621 0 002.28 0 1.6 1.6 0 000-2.27L14.27 12l2.71-2.71a1.6 1.6 0 000-2.27z"
    />
  </svg>
);

SvgIconRemove.defaultProps = defaultProps;
export default SvgIconRemove;
