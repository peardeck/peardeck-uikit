import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingTextSizer = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 62 62" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M31 0a31 31 0 1031 31A31 31 0 0031 0zm17.38 23.35a4.14 4.14 0 01-7 2.93 4 4 0 01-1.27-2.86v-.68H35.6v16.54h3.11A4.35 4.35 0 0142.42 43l.09.65-.18.71a4.58 4.58 0 01-3.12 3l-.43.11H23.34a4.41 4.41 0 01-3.76-3.85L19.5 43l.18-.68a4.46 4.46 0 013.92-3.14h2.88V22.74h-4.62v.72a4 4 0 01-4.05 4h-.06A4.1 4.1 0 0114.64 26a4 4 0 01-1-2.63v-5.05a3.83 3.83 0 013.83-3.82h27.1a3.88 3.88 0 013.83 3.8z" />
  </svg>
);

SvgIconDrawingTextSizer.defaultProps = defaultProps;
export default SvgIconDrawingTextSizer;
