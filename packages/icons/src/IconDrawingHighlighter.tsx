import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDrawingHighlighter = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 61.83 60.52" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M59.9 7.35l-5.41-5.42a6.63 6.63 0 0 0-9-.32L11 31.5c-.49.42-1.7 1.52-2.16 2l-3.68 3.65a4.45 4.45 0 0 0-1.31 3.11v8.34l-2.58 2.66A4.45 4.45 0 0 0 3 58.55l5.43 1.82a3.09 3.09 0 0 0 .95.15 3 3 0 0 0 2.12-.88l1.68-1.67h8.34a4.49 4.49 0 0 0 3.15-1.31L28.32 53c.46-.45 1.55-1.65 2-2.15l29.89-34.48a6.62 6.62 0 0 0-.31-9.02zm-4.22 5.08L25.84 46.89c-.37.42-1.32 1.47-1.72 1.87l-1.27 1.27a.37.37 0 0 1-.53 0l-10.53-10.5a.39.39 0 0 1 0-.53l1.28-1.27c.39-.4 1.43-1.33 1.85-1.7l34.5-29.88a.59.59 0 0 1 .82 0l5.42 5.41a.61.61 0 0 1 .02.87z" />
  </svg>
);

SvgIconDrawingHighlighter.defaultProps = defaultProps;
export default SvgIconDrawingHighlighter;
