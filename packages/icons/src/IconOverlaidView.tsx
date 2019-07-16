import React, { SVGProps } from "react";

const SvgIconOverlaidView = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" width="1em" height="1em" {...props}>
    <path d="M28.1 38.7l-19.9-12c-4.3-2.6-4.3-8.8 0-11.4L29 2.7c2.1-1.3 4.8-1.3 6.9 0l19.9 12c4.3 2.6 4.3 8.8 0 11.4L35 38.7c-2.1 1.3-4.8 1.3-6.9 0zM11.3 20.9l20.3 11.8 21.1-12.3L32.4 8.6 11.3 20.9z" />
    <path d="M30.1 51.4L5.4 36.5c-1.4-.8-1.8-2.6-1-4s2.6-1.8 4-1l23.1 14 24-14.5c1.4-.8 3.2-.4 4 1 .8 1.4.4 3.2-1 4L33.1 51.4c-.9.6-2.1.6-3 0z" />
    <path d="M30.1 62L5.4 47.1c-1.4-.8-1.8-2.6-1-4s2.6-1.8 4-1l23.1 14 23.9-14.5c1.4-.8 3.2-.4 4 1 .8 1.4.4 3.2-1 4L33.1 62c-.9.6-2.1.6-3 0z" />
  </svg>
);

export default SvgIconOverlaidView;
