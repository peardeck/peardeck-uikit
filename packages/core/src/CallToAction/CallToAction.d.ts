import { ReactNode } from "react";
interface CallToActionPropTypes {
  children: ReactNode;
  title: ReactNode;
  image: ReactNode;
  buttonContent: ReactNode;
}
export declare const CallToAction: ({
  children,
  title,
  image,
  buttonContent,
}: CallToActionPropTypes) => JSX.Element;
export {};
