module.exports = {
  env: {
    esm: {
      presets: [
        ['@babel/preset-env', {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
        }],
      ],
    },
    node: {
      presets: [
        ['@babel/preset-env', {
          loose: true,
        }],
      ],
    },
  },
};
