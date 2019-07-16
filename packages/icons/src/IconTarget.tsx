import React, { SVGProps } from "react";

const SvgIconTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" width="1em" height="1em" {...props}>
    <path d="M32 9c12.7 0 23 10.3 23 23S44.7 55 32 55 9 44.7 9 32 19.3 9 32 9m0-9C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0z" />
    <path d="M32 22c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10m0-9c-10.5 0-19 8.5-19 19s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19z" />
    <circle cx={32} cy={32} r={6} />
  </svg>
);

export default SvgIconTarget;
