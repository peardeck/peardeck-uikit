import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconDocument = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M43 0H11C8.8 0 7 1.8 7 4v56c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V14L43 0zm8 58H13V6h27.5l.5.5V13c0 2.2 1.8 4 4 4h6v41z" />
    <path d="M45 26H20c-1.1 0-2-.9-2-2s.9-2 2-2h25c1.1 0 2 .9 2 2s-.9 2-2 2zM45 36H20c-1.1 0-2-.9-2-2s.9-2 2-2h25c1.1 0 2 .9 2 2s-.9 2-2 2zM45 46H20c-1.1 0-2-.9-2-2s.9-2 2-2h25c1.1 0 2 .9 2 2s-.9 2-2 2z" />
  </svg>
);

SvgIconDocument.defaultProps = defaultProps;
export default SvgIconDocument;
