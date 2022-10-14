/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Web Components',
        include: [
          'src/components/SimpleCounter/SimpleCounter.jsx',
          'src/components/ScaleButton/ScaleButton.jsx',
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'UXPin Merge Boilerplate',
};
