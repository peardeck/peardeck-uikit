import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgPeary = ({ title, size, ...props }: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 296.669 450" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path
      d="M134.61 12.044a36.731 36.731 0 0136.482 32.878 60.237 60.237 0 0141.237-16.299 9.635 9.635 0 110 19.27 41.234 41.234 0 00-41.04 37.955l.001 3.25a9.57 9.57 0 01-.165 1.632v10.156h2.92c14.054 0 31.008 15.045 37.962 31.081l.505 1.163c.172 0 30.65 70.689 30.65 70.689a136.811 136.811 0 0141.463 97.847c0 75.15-61.14 136.29-136.292 136.29-75.15 0-136.289-61.14-136.289-136.29a136.817 136.817 0 0141.461-97.847l31.156-71.852a52.765 52.765 0 0148.435-31.79 10.723 10.723 0 0110.717 10.733h8.081c-.005-.132-.04-.256-.04-.39V89.098c0-1.425.068-2.833.165-4.233V68.652c-2.023.801-4.186 1.63-6.402 2.46a9.607 9.607 0 01-4.877 11.597c-11.608 5.713-22.553 8.572-32.75 8.572a49.73 49.73 0 01-22.455-5.227C56.262 71.469 48.307 31.5 47.982 29.807a9.633 9.633 0 0114.876-9.781 32.202 32.202 0 0018.444 5.356c10.345 0 20.385-3.903 26.83-7.069a60.436 60.436 0 0126.478-6.269"
      fill="#fff"
    />
    <path
      d="M134.61 0a72.547 72.547 0 00-31.79 7.504c-7.659 3.762-15.3 5.834-21.518 5.834a20.111 20.111 0 01-11.677-3.276 21.68 21.68 0 00-33.473 22.006c.93 4.852 10.057 47.848 44.012 64.766a61.52 61.52 0 0013.294 4.819 64.75 64.75 0 00-19.847 25.523l-30.227 69.71A149.192 149.192 0 000 301.665C0 383.458 66.542 450 148.333 450c81.793 0 148.336-66.542 148.336-148.334a149.19 149.19 0 00-43.377-104.772c-2.258-5.235-8.29-19.217-14.336-33.2-3.824-8.844-7.653-17.688-10.537-24.321a2335.83 2335.83 0 00-3.515-8.053c-.413-.94-.86-1.954-1.386-2.967l.042-.018-.504-1.163a72.368 72.368 0 00-19.62-25.981 54.085 54.085 0 00-20.131-11.047c.018-.334.029-.684.029-1.046v-2.736a29.276 29.276 0 0128.995-26.424 21.68 21.68 0 100-43.359 72.14 72.14 0 00-34.836 8.933A48.601 48.601 0 00134.61 0z"
      fill="#fff"
    />
    <path
      d="M142.405 21.68c-22.876 2.391-51.287 27.084-84.96 6.315 0 0 5.62 59.327 62.754 52.099 0 0 32.401-10.84 41.456-15.658 0 0 3.626-45.149-19.25-42.757z"
      fill="#7c903a"
    />
    <path
      d="M234.18 210.083l-32.02-73.846a42.059 42.059 0 00-38.587-25.327h-30.478a42.059 42.059 0 00-38.587 25.327l-32.021 73.846a125.558 125.558 0 10171.694 0z"
      fill="#c8db58"
    />
    <path
      d="M185.838 401.776a8.51 8.51 0 00-10.77-5.359 91.41 91.41 0 01-29.13 4.806c-45.7 0-85.86-33.925-93.419-78.914-2.332-13.881-4.036-26.311-1.258-37.873l.13-.658c.024-.149 2.404-14.893 7.418-24.921a8.504 8.504 0 10-15.212-7.608c-5.798 11.59-8.524 26.965-8.95 29.53-3.419 14.558-1.433 29.286 1.098 44.348 8.916 53.08 56.289 93.106 110.193 93.106a108.395 108.395 0 0034.54-5.688 8.507 8.507 0 005.36-10.769z"
      fill="#f4e78d"
    />
    <ellipse cx={153.961} cy={273.54} rx={15.061} ry={15.075} fill="#364443" />
    <ellipse cx={191.728} cy={273.54} rx={15.061} ry={15.075} fill="#364443" />
    <path
      d="M198.962 317.86a11.889 11.889 0 00-16.821-.317 15.212 15.212 0 01-21.143 0 11.903 11.903 0 00-16.507 17.153 38.992 38.992 0 0054.155 0 11.916 11.916 0 00.316-16.837z"
      fill="#364443"
    />
    <path
      d="M243.162 203.819s-30.497-70.731-30.65-70.689l-.504-1.163c-6.955-16.036-23.909-31.081-37.962-31.081h-2.92V90.73a9.607 9.607 0 00.165-1.633v-3.25a41.233 41.233 0 0141.039-37.954 9.635 9.635 0 100-19.27 60.238 60.238 0 00-41.238 16.299 36.73 36.73 0 00-36.483-32.879 60.44 60.44 0 00-26.477 6.268c-10.357 5.09-30.01 12.08-45.273 1.712a9.635 9.635 0 00-14.877 9.782c.324 1.695 8.28 41.664 37.551 56.246 15.965 7.954 34.539 6.829 55.206-3.344a9.635 9.635 0 10-8.508-17.29c-14.963 7.362-27.765 8.51-38.05 3.413-10.243-5.077-17.007-15.478-21.237-24.74 17.11 2.526 33.678-3.567 43.686-8.483a41.066 41.066 0 0117.98-4.293 17.43 17.43 0 0117.41 17.41v36.14a60.92 60.92 0 00-.165 4.233v21.423a9.593 9.593 0 003.908 7.709 10.646 10.646 0 007.798 3.413 31.31 31.31 0 0128.752 18.864l32.02 73.846a10.75 10.75 0 002.506 3.56 113.712 113.712 0 0136.32 83.595c.08 60.106-46.951 110.68-106.921 114.717a114.949 114.949 0 01-122.729-114.56 113.725 113.725 0 0136.319-83.753 10.749 10.749 0 002.506-3.559l32.021-73.846a31.31 31.31 0 0128.292-18.861c5.4-.077 10.26-3.742 11.058-9.083a10.738 10.738 0 00-10.61-12.385 52.766 52.766 0 00-48.434 31.79l-31.156 71.85a136.818 136.818 0 00-41.461 97.848c0 75.15 61.14 136.29 136.29 136.29 75.151 0 136.29-61.14 136.29-136.29a136.81 136.81 0 00-41.462-97.847z"
      fill="#364443"
    />
  </svg>
);

SvgPeary.defaultProps = defaultProps;
export default SvgPeary;
