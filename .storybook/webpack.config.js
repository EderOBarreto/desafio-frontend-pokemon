const path = require('path');

module.exports = ({ config }) => {
  // Typescript support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
  });

  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.scss');

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '..'),
    '~': path.resolve(__dirname, '..'),
  };

  // SCSS support
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.stories\.ts?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    },
  );

  return config;
};
