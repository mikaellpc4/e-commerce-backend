module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@routes': './src/routes',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@entities': './src/entities',
        '@middlewares': './src/middlewares',
        '@repositories': './src/repositories',
        '@useCases': './src/useCases',
        '@validations': './src/validations',
      },
    }],
  ],
};
