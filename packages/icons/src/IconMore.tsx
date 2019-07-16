import React, { SVGProps } from "react";

const SvgIconMore = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" width="1em" height="1em" {...props}>
    <circle cx={32} cy={11} r={7} />
    <circle cx={32} cy={32} r={7} />
    <circle cx={32} cy={53} r={7} />
  </svg>
);

export default SvgIconMore;
