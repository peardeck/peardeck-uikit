import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgAccountStatusCrown = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 59.42 41.19" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      d="M4.83 28.96c3.59 3.17 9.65 6.9 18.67 9.64 8.78 2.67 15.45 2.91 20.17 2.33l.62-3.15c-4.7.52-11.26.23-19.82-2.37-9.02-2.71-14.76-6.38-18.35-9.54z"
      fill="#364342"
      opacity={0.1}
    />
    <path
      d="M52.94 36.86s-9 6.56-29.06.47S0 20.77 0 20.77L6.11 0l10.6 11.22 18.14-10 9.48 18.43 15.09-3.45z"
      fill="#eedb45"
    />
    <circle
      cx={9.43}
      cy={14.99}
      r={2.67}
      fill="#3388b8"
      stroke="#6faccd"
      strokeMiterlimit={10}
    />
    <circle cx={8.89} cy={14.48} r={1.34} fill="#fff" />
    <circle
      cx={48.22}
      cy={27.13}
      r={2.67}
      fill="#3388b8"
      stroke="#6faccd"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <circle cx={47.68} cy={26.62} r={1.34} fill="#fff" />
    <circle
      cx={28.49}
      cy={22.18}
      r={4.87}
      fill="#d24a49"
      stroke="#d77"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <circle cx={27.37} cy={21.13} r={2.39} fill="#fff" />
    <path
      d="M53.91 33.7a18.43 18.43 0 01-7 2.51c-4.76.88-12 1-22-2s-16-7.19-19.45-10.57a18.62 18.62 0 01-4.43-6l-1 3.2a18.42 18.42 0 004.43 6c3.47 3.38 9.44 7.52 19.45 10.56s17.28 2.93 22 2a18.52 18.52 0 007-2.52z"
      fill="#e0cb4b"
    />
  </svg>
);

SvgAccountStatusCrown.defaultProps = defaultProps;
export default SvgAccountStatusCrown;
