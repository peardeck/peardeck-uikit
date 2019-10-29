import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconGoogle = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 32 32" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M15.792 13.853c-.007 1.705 0 3.41.007 5.114 2.818.092 5.643.05 8.46.092-1.243 6.339-9.745 8.393-14.244 4.254-4.625-3.63-4.407-11.594.403-14.967 3.361-2.721 8.142-2.049 11.504.308a53.31 53.31 0 003.75-3.939c-2.796-2.263-6.229-3.874-9.88-3.702C8.172.754 1.167 7.523 1.04 15.249c-.487 6.317 3.61 12.512 9.393 14.746 5.763 2.25 13.15.717 16.83-4.533 2.429-3.316 2.951-7.584 2.669-11.595-4.718-.035-9.428-.028-14.139-.014" />
  </svg>
);

SvgIconGoogle.defaultProps = defaultProps;
export default SvgIconGoogle;
