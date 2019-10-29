import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconSpeakerNotesOff = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M38.44 25.63v.06h6v-4.35a1.79 1.79 0 00-1.79-1.79H38.3v5.43a1.77 1.77 0 01.14.65z" />
    <path d="M37.74 29.25A3 3 0 0135 27.41H23.33a1.78 1.78 0 010-3.56h11.42v-4.3H21.34a1.79 1.79 0 00-1.79 1.79v21.31a1.79 1.79 0 001.79 1.79h21.32a1.79 1.79 0 001.79-1.79v-13.4zm3.1 11.2H23.33a1.78 1.78 0 010-3.56h17.51a1.78 1.78 0 010 3.56zm0-6.52H23.33a1.78 1.78 0 010-3.56h17.51a1.78 1.78 0 010 3.56z" />
    <path d="M32-.02a32 32 0 1032 32 32 32 0 00-32-32zm16 21.36v21.31a5.35 5.35 0 01-5.34 5.33H21.34A5.35 5.35 0 0116 42.65V21.34a5.35 5.35 0 015.34-5.36H45a3 3 0 013 3z" />
  </svg>
);

SvgIconSpeakerNotesOff.defaultProps = defaultProps;
export default SvgIconSpeakerNotesOff;
