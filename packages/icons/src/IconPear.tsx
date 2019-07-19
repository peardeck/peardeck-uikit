import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconPear = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 38.4 60" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M32.559 27.016s-4.297-9.964-4.318-9.958l-.071-.164c-.98-2.259-3.368-4.379-5.348-4.379h-.411v-1.43a1.358 1.358 0 0 0 .023-.23v-.458a5.809 5.809 0 0 1 5.734-5.347 1.393 1.393 0 0 0 1.4-1.245 1.358 1.358 0 0 0-1.353-1.47 8.486 8.486 0 0 0-5.81 2.297A5.174 5.174 0 0 0 17.267 0a8.515 8.515 0 0 0-3.73.883c-1.459.717-4.227 1.702-6.377.241a1.357 1.357 0 0 0-2.096 1.378c.045.239 1.166 5.87 5.29 7.924l.061.029a6.553 6.553 0 0 0 1.685.51 9.738 9.738 0 0 0 1.726.162 13.88 13.88 0 0 0 5.893-.848c-.013.19-.022.382-.022.576v1.365c-.35-.013-.697-.016-1.04-.009a14.596 14.596 0 0 0-2.528.263 7.426 7.426 0 0 0-3.025 1.078 4.424 4.424 0 0 0-.428.281 7.118 7.118 0 0 0-2.298 2.886L5.841 27.016a19.2 19.2 0 1 0 26.718 0z" />
  </svg>
);

SvgIconPear.defaultProps = defaultProps;
export default SvgIconPear;
