import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconStudentAnswer = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 61.78 54"
    width={size}
    height={size}
    {...props}
  >
    <title>{title}</title>
    <path d="M55.99 0H5.79A5.81 5.81 0 0 0 0 5.79v29a5.81 5.81 0 0 0 5.79 5.68h32.82L52.13 54V40.47h3.86a5.81 5.81 0 0 0 5.79-5.79v-29A5.81 5.81 0 0 0 55.99 0z" />
  </svg>
);

SvgIconStudentAnswer.defaultProps = defaultProps;
export default SvgIconStudentAnswer;
