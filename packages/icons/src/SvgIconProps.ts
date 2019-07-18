import { SVGProps } from "react";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  size: string | number | undefined;
}

export const defaultProps: SvgIconProps = {
  "aria-hidden": "true",
  focusable: "false",
  size: "1em",
  tabIndex: -1,
};
