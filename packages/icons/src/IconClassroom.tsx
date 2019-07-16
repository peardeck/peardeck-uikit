import React, { SVGProps } from "react";

const SvgIconClassroom = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path stroke="#FFC112" strokeWidth={8} fill="#FFC112" d="M0 0h48v48H0z" />
      <path fill="#21A465" d="M4 4h40v40H4z" />
      <path
        d="M34.5 24a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-.5 2c-2.892 0-6 1.42-6 3.175V31h12v-1.825C40 27.419 36.892 26 34 26zm-19.5-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm.5 2c-2.892 0-6 1.42-6 3.175V31h12v-1.825C21 27.419 17.892 26 15 26z"
        fill="#57BB8A"
      />
      <path
        d="M23.503 22A3.5 3.5 0 1 0 20 18.5c0 1.934 1.57 3.5 3.503 3.5zM24 24c-3.857 0-8 2.088-8 4.667V31h16v-2.333C32 26.088 27.857 24 24 24z"
        fill="#F7F7F7"
      />
      <path d="M28 41h12v3H28v-3z" fill="#F1F1F1" />
    </g>
  </svg>
);

export default SvgIconClassroom;
