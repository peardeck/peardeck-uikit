import React, { SVGProps } from "react";

const SvgIconDraggable = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" width="1em" height="1em" {...props}>
    <path d="M40.6 52H43L31.9 64 21 52H40.6zM40.6 12H43L31.9 0 21 12H40.6zM12 40.6V43L0 31.9 12 21V40.6zM52 40.6V43l12-11.1L52 21V40.6zM32 20c6.5 0 12 5.5 12 12s-5.5 12-12 12-12-5.5-12-12 5.5-12 12-12z" />
  </svg>
);

export default SvgIconDraggable;
