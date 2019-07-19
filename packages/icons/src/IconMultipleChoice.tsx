import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconMultipleChoice = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M16.5 16C8 16 1 22.9 1 31.5S8 47 16.5 47 32 40.1 32 31.5 25.1 16 16.5 16zm9.3 13.1L15.9 39c-.4.4-1 .6-1.6.6-.6 0-1.1-.2-1.6-.6l-5.2-5.2c-.9-.9-.9-2.2 0-3.1s2.2-.9 3.1 0l3.7 3.7 8.3-8.3c.9-.9 2.2-.9 3.1 0 .9.8.9 2.1.1 3zM47.5 17C39 17 32 23.9 32 32.5S39 48 47.5 48 63 41 63 32.5 56.1 17 47.5 17zm7.4 19.9c.5.5.5 1.2 0 1.7l-1.3 1.3c-.5.5-1.2.5-1.7 0l-4.5-4.5-4.5 4.5c-.5.5-1.2.5-1.7 0l-1.3-1.3c-.5-.5-.5-1.2 0-1.7l4.5-4.5-4.3-4.4c-.5-.5-.5-1.2 0-1.7l1.3-1.3c.5-.5 1.2-.5 1.7 0l4.5 4.5 4.5-4.5c.5-.5 1.2-.5 1.7 0l1.3 1.3c.5.5.5 1.2 0 1.7l-4.5 4.5 4.3 4.4z" />
  </svg>
);

SvgIconMultipleChoice.defaultProps = defaultProps;
export default SvgIconMultipleChoice;
