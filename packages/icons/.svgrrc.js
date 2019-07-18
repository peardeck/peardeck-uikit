module.exports = {
  // Make SVGR output TypeScript instead of JavaScript
  // see https://www.smooth-code.com/open-source/svgr/docs/typescript/
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ["typescript"] });
    return typeScriptTpl.ast`
    import React from 'react';
    import { SvgIconProps, defaultProps } from './SvgIconProps';

    const ${componentName} = ({ title, size, ...props }: SvgIconProps) => ${jsx};

    ${componentName}.defaultProps = defaultProps;

    export default ${componentName};
  `;
  },

  jsx: {
    babelConfig: {
      plugins: ["@svgr/babel-plugin-svg-dynamic-title"],
    },
  },

  // This way we can supply a single `size` prop that gets converted to both height and width.
  svgProps: {
    height: "{size}",
    width: "{size}",
  },

  icon: true,
};
