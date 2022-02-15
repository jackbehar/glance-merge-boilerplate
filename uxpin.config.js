/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Scale',
        include: [
          'src/components/ScaleButton/ScaleButton.jsx',
          'src/components/ScaleTag/ScaleTag.jsx',
          'src/components/ScaleSwitch/ScaleSwitch.jsx',
          'src/components/ScaleDropdown/ScaleDropdown.jsx',
        ],
      },
      {
        name: 'miscellaneous',
        include: [
          'src/components/ScaleOption/ScaleOption.jsx',
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'UXPin Merge Boilerplate',
};
