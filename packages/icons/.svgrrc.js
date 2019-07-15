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
    import React, { SVGProps } from 'react';
    const ${componentName} = (props: SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `;
  },

  icon: true,
};
