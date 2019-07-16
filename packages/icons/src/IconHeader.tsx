import React, { SVGProps } from "react";

const SvgIconHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" width="1em" height="1em" {...props}>
    <path d="M14 19h36v8H14z" />
    <path d="M0 6v52h64V6H0zm56 44H8V14h48v36z" />
  </svg>
);

export default SvgIconHeader;
