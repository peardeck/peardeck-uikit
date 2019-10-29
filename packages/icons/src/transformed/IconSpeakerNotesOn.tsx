import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconSpeakerNotesOn = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M42.66 19.53H21.34a1.79 1.79 0 00-1.79 1.79v21.31a1.79 1.79 0 001.79 1.79h21.32a1.79 1.79 0 001.79-1.79V21.31a1.79 1.79 0 00-1.79-1.78zm-1.82 20.9H23.33a1.78 1.78 0 010-3.56h17.51a1.78 1.78 0 010 3.56zm0-6.52H23.33a1.78 1.78 0 010-3.56h17.51a1.78 1.78 0 010 3.56zm-.44-6.52H23.77a2 2 0 01-2.22-1.78 2 2 0 012.22-1.78H40.4a2 2 0 012.22 1.78 2 2 0 01-2.22 1.78z" />
    <path d="M32-.03a32 32 0 1032 32 32 32 0 00-32-32zm16 42.66a5.35 5.35 0 01-5.34 5.34H21.34A5.35 5.35 0 0116 42.63V21.31a5.35 5.35 0 015.34-5.34h21.32A5.35 5.35 0 0148 21.31z" />
  </svg>
);

SvgIconSpeakerNotesOn.defaultProps = defaultProps;
export default SvgIconSpeakerNotesOn;
