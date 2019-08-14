import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingTextSizerT = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 60.7" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M64 16.29a7.62 7.62 0 01-12.89 5.4 7.38 7.38 0 01-2.33-5.27v-1.25h-8.35v30.45h5.73A8 8 0 0153 52.47l.17 1.2-.34 1.31a8.45 8.45 0 01-5.74 5.52l-.79.2H17.86a8.12 8.12 0 01-6.92-7.09l-.15-1.14.33-1.25a8.21 8.21 0 017.22-5.78h5.3V15.17h-8.51v1.32a7.45 7.45 0 01-7.45 7.37h-.11a7.54 7.54 0 01-5.73-2.69A7.38 7.38 0 010 16.35V7.03a7 7 0 017.05-7H57a7.14 7.14 0 017 7z" />
  </svg>
);

SvgIconDrawingTextSizerT.defaultProps = defaultProps;
export default SvgIconDrawingTextSizerT;
