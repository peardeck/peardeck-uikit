import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconVocabularyList = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 60.51 64.2" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <path d="M7.56 0L0 28l44 11.89 7.57-28zM40.8 25.73L9.54 17.27l.93-3.45 31.25 8.46z" />
    <path d="M15.1 31.73l-2.28 28.88 45.4 3.59 2.29-28.88zM52.51 50.9l-32.28-2.56.28-3.56 32.28 2.56z" />
  </svg>
);

SvgIconVocabularyList.defaultProps = defaultProps;
export default SvgIconVocabularyList;
