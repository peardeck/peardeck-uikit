import React, { SVGProps } from "react";

const SvgIconWaitingSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="icon-waiting-spinner_svg__spinner"
    width="1em"
    height="1em"
    viewBox="0 0 66 66"
    {...props}
  >
    <circle
      className="icon-waiting-spinner_svg__spinner-path"
      fill="none"
      strokeWidth={6}
      strokeLinecap="round"
      cx={33}
      cy={33}
      r={30}
    />
  </svg>
);

export default SvgIconWaitingSpinner;
