import React, { SVGProps } from "react";

const SvgIconWorking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 56 14"
    width="1em"
    height="1em"
    {...props}
  >
    <circle
      className="icon-working_svg__working-spinner-dot-03"
      cx={49}
      cy={7}
      r={7}
    />
    <circle
      className="icon-working_svg__working-spinner-dot-02"
      cx={28}
      cy={7}
      r={7}
    />
    <circle
      className="icon-working_svg__working-spinner-dot-01"
      cx={7}
      cy={7}
      r={7}
    />
  </svg>
);

export default SvgIconWorking;
