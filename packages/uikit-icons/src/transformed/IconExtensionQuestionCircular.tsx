import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconExtensionQuestionCircular = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M64 32A32 32 0 1132 0a32 32 0 0132 32zM46.35 16.63H17.66a2.06 2.06 0 00-2 2v20.54a2.06 2.06 0 002 2h18.75l6 6a.47.47 0 00.36.15.31.31 0 00.2-.05.49.49 0 00.31-.46v-5.59h3.07a2.06 2.06 0 002-2V18.68a2.06 2.06 0 00-2-2.05zm-12.9 18.3a1.5 1.5 0 11-3 0v-4.5h-4.5a1.5 1.5 0 010-3h4.5v-4.5a1.5 1.5 0 013 0v4.5h4.5a1.5 1.5 0 010 3h-4.5z" />
  </svg>
);

SvgIconExtensionQuestionCircular.defaultProps = defaultProps;
export default SvgIconExtensionQuestionCircular;
