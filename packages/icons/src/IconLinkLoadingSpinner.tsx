import React, { SVGProps } from "react";

const SvgIconLinkLoadingSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="icon-link-loading-spinner_svg__link-loading__spinner"
    viewBox="0 0 66 66"
    width="1em"
    height="1em"
    {...props}
  >
    <circle
      className="icon-link-loading-spinner_svg__link-loading__spinner__path"
      fill="none"
      strokeWidth={6}
      strokeLinecap="round"
      cx={33}
      cy={33}
      r={30}
    />
  </svg>
);

export default SvgIconLinkLoadingSpinner;
