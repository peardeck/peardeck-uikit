import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconMsftExternalLink = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 64 63.967" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M33.902 32.262a2.46 2.46 0 001.737-.721L58.787 8.393v11.968a2.459 2.459 0 004.918 0V2.459A2.459 2.459 0 0061.245 0h-17.9a2.459 2.459 0 000 4.918H55.31L32 28.066a2.459 2.459 0 001.738 4.196z" />
    <path d="M61.508 34.623a2.459 2.459 0 00-2.459 2.459V57.41a1.607 1.607 0 01-1.606 1.606H6.557a1.607 1.607 0 01-1.606-1.606V6.525a1.607 1.607 0 011.606-1.607h19.246a2.459 2.459 0 000-4.918H6.557A6.557 6.557 0 000 6.557V57.41a6.557 6.557 0 006.557 6.557h50.886A6.557 6.557 0 0064 57.41V37.082a2.459 2.459 0 00-2.459-2.46z" />
  </svg>
);

SvgIconMsftExternalLink.defaultProps = defaultProps;
export default SvgIconMsftExternalLink;
