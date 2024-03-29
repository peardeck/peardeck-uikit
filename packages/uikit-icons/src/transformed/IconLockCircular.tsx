import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconLockCircular = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M64 32c0 17.7-14.3 32-32 32S0 49.7 0 32 14.3 0 32 0s32 14.4 32 32zm-22.4-6.5v-2.9c0-5.3-4.3-9.6-9.6-9.6s-9.6 4.3-9.6 9.6v2.9h-1.3c-.7 0-1.3.5-1.3 1.2v16.9c0 .7.5 1.3 1.2 1.3h21.9c.7 0 1.3-.5 1.3-1.2V26.8c0-.7-.5-1.3-1.2-1.3h-1.4zm-3.5 0H25.9v-2.9c0-4.1 2.5-6.5 6.8-6.1 3.7.3 5.5 2.6 5.5 6.3l-.1 2.7z" />
  </svg>
);

SvgIconLockCircular.defaultProps = defaultProps;
export default SvgIconLockCircular;
