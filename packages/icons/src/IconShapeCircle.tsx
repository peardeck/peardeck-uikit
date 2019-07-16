import React, { SVGProps } from "react";

const SvgIconShapeCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 60 60" width="1em" height="1em" {...props}>
    <circle cx={30} cy={30} r={30} />
  </svg>
);

export default SvgIconShapeCircle;
