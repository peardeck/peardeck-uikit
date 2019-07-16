import React from "react";
import { SvgIconProps, defaultProps } from "./SvgIconProps";

const SvgIconSchool = ({ title, size, ...props }: SvgIconProps) => (
  <svg viewBox="0 0 62.468 56.834" width={size} height={size} {...props}>
    <title>{title}</title>
    <path d="M57.9 56.834H34.223v-13.06a1.983 1.983 0 0 0-1.98-1.98h-1.116a1.983 1.983 0 0 0-1.98 1.98v13.06H4.568A4.573 4.573 0 0 1 0 52.266V22.084a4.574 4.574 0 0 1 4.569-4.569h13.904l8.602-8.141v-5.18A4.198 4.198 0 0 1 31.268 0h6.351a4.193 4.193 0 0 1 0 8.386h-2.158v.911l8.672 8.218h13.766a4.574 4.574 0 0 1 4.57 4.569v30.182a4.574 4.574 0 0 1-4.57 4.568zM37.898 53.16h20a.895.895 0 0 0 .895-.894V22.084a.895.895 0 0 0-.895-.894H42.67L31.787 10.877V4.712h5.832a.519.519 0 0 0 0-1.037h-6.35a.52.52 0 0 0-.52.518v6.762L19.937 21.19H4.57a.895.895 0 0 0-.894.894v30.182a.895.895 0 0 0 .894.894h20.904v-9.387a5.661 5.661 0 0 1 5.655-5.654h1.115a5.662 5.662 0 0 1 5.656 5.654zm-6.58-20.983A6.177 6.177 0 1 1 37.497 26a6.184 6.184 0 0 1-6.178 6.177zm0-8.68A2.502 2.502 0 1 0 33.822 26a2.505 2.505 0 0 0-2.503-2.502z" />
  </svg>
);

SvgIconSchool.defaultProps = defaultProps;
export default SvgIconSchool;
