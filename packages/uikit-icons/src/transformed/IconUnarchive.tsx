import React from "react";
import { SvgIconProps, defaultProps } from "../SvgIconProps";

const SvgIconUnarchive = ({
  title,
  size,
  ...props
}: SvgIconProps): JSX.Element => (
  <svg viewBox="0 0 62 52.02" width={size} height={size} {...props}>
    {title ? <title>{title}</title> : null}
    <defs />
    <defs>
      <style>{".icon-unarchive_svg__icon-unarchive_svg__a{fill:none}"}</style>
    </defs>
    <path d="M60.9 20a5.89 5.89 0 00-4.5-2.3h-2v-4.6a5.57 5.57 0 00-5.5-5.6H30.4a1.38 1.38 0 01-1.1-1.3v-.6A5.51 5.51 0 0023.8 0H5.6A5.57 5.57 0 000 5.5v40.8A5.76 5.76 0 005.7 52h43.7a5.58 5.58 0 005.4-4l6.9-23.1a5.08 5.08 0 00-.8-4.9zM4.2 5.6a1.35 1.35 0 011.3-1.4h18.1A1.37 1.37 0 0125 5.6v.6a5.07 5.07 0 00.2 1.3h-21zm0 6.1h44.6a1.37 1.37 0 011.4 1.4v4.6H13.6a5.71 5.71 0 00-5.4 3.8l-4.1 12zM51 47a1.54 1.54 0 01-1.5 1l-43.6.1a1.31 1.31 0 01-1.2-.6 1.72 1.72 0 01-.2-1.2l7.9-23.1a1.5 1.5 0 011.4-1h42.7a1.43 1.43 0 011.2.6C57.9 23 51 47 51 47z" />
    <path d="M60.9 20a5.93 5.93 0 00-4.6-2.3h-2v-4.6a5.57 5.57 0 00-5.5-5.6H30.4a1.38 1.38 0 01-1.1-1.3v-.6A5.51 5.51 0 0023.8 0H5.6A5.57 5.57 0 000 5.5v40.8A5.76 5.76 0 005.7 52l43.7-.1a5.58 5.58 0 005.4-4l6.9-23.1a4.94 4.94 0 00-.8-4.8zm-47.3-2.3a5.71 5.71 0 00-5.4 3.8l-4.1 12V11.7h44.6a1.37 1.37 0 011.4 1.4v4.6z" />
    <path
      className="icon-unarchive_svg__icon-unarchive_svg__a"
      d="M48.79 11.74H4.2v21.79l4.07-12a5.66 5.66 0 015.37-3.79h36.53v-4.62a1.38 1.38 0 00-1.38-1.38z"
    />
    <path
      className="icon-unarchive_svg__icon-unarchive_svg__a"
      d="M60.91 20a5.68 5.68 0 00-4.55-2.27h-2v-4.64a5.56 5.56 0 00-5.54-5.58H30.4a1.38 1.38 0 01-1.12-1.35v-.54A5.56 5.56 0 0023.78 0H5.58A5.56 5.56 0 000 5.54V46.3A5.79 5.79 0 005.72 52h43.69a5.77 5.77 0 005.44-4l6.89-23.08a5.37 5.37 0 00-.83-4.92zm-10.74-2.26H13.64a5.66 5.66 0 00-5.37 3.79l-4.07 12V11.74h44.59a1.38 1.38 0 011.38 1.38z"
    />
  </svg>
);

SvgIconUnarchive.defaultProps = defaultProps;
export default SvgIconUnarchive;
