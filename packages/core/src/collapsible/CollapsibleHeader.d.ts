/// <reference types="react" />
export interface CollapsibleHeaderProps {
  title: string;
  subTitle?: string;
  collapsed: boolean;
  onCollapsedChange: Function;
}
export declare const CollapsibleHeader: ({
  onCollapsedChange,
  title,
  subTitle,
  collapsed,
  ...props
}: CollapsibleHeaderProps) => JSX.Element;
