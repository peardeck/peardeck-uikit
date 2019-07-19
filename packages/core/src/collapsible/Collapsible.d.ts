import React from "react";
import { CollapsibleHeaderProps } from "./CollapsibleHeader";
interface CollapsibleProps extends CollapsibleHeaderProps {
  onCollapsedChange: Function;
  children: React.ReactNode;
}
export declare const Collapsible: ({
  children,
  collapsed,
  onCollapsedChange,
  ...props
}: CollapsibleProps) => JSX.Element;
interface UncontrolledCollapsibleProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}
export declare const UncontrolledCollapsible: (
  props: UncontrolledCollapsibleProps
) => JSX.Element;
export {};
