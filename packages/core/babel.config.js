module.exports = {
  env: {
    // This allows Jest to compile ES6 modules from
    // our other packages
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ]
    }
  }
};
