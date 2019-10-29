import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconPresent = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M23.9 1.038c-5.6 0-10.1 4.5-10.1 10.1 0 2.3.8 4.4 2 6.1H3.7c-1.1 0-2 1-2 2v12.1c0 1.1 1 2 2 2h2v27.6c0 1.1 1 2 2 2h48.5c1.1 0 2-1 2-2v-27.6h2c1.1 0 2-1 2-2v-12.1c0-1.1-1-2-2-2h-12c1.3-1.7 2-3.8 2-6.1 0-5.6-4.5-10.1-10.1-10.1-3.3 0-6.2 1.6-8.1 4.1-1.8-2.5-4.8-4.1-8.1-4.1zm0 4c3.4 0 6.1 2.7 6.1 6.1v6.1h-6.1c-3.4 0-6.1-2.7-6.1-6.1 0-3.4 2.7-6.1 6.1-6.1zm16.2 0c3.4 0 6.1 2.7 6.1 6.1 0 3.4-2.7 6.1-6.1 6.1H34v-6.1c0-3.4 2.7-6.1 6.1-6.1zm-34.4 16.2H30v8.1H5.7v-8.1zm28.3 0h24.3v8.1H34v-8.1zm-24.2 12.1H30v25.6H9.8v-25.6zm24.2 0h20.2v25.6H34v-25.6z" />
  </svg>
);

SvgIconPresent.defaultProps = defaultProps;
export default SvgIconPresent;
