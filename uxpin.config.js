/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Scale',
        include: [
          'src/components/ScaleButton/ScaleButton.jsx',
          // 'src/components/ScaleBreadcrumb/ScaleBreadcrumb.jsx',
          'src/components/ScaleCheckbox/ScaleCheckbox.jsx',
          'src/components/ScaleDropdown/ScaleDropdown.jsx',
          'src/components/ScaleRatingStars/ScaleRatingStars.jsx',
          'src/components/ScaleSwitch/ScaleSwitch.jsx',
          'src/components/ScaleTag/ScaleTag.jsx',
          'src/components/ScaleTextField/ScaleTextField.jsx',
          'src/components/ScaleDatePicker/ScaleDatePicker.jsx',
          'src/components/ScaleDataGrid/ScaleDataGrid.jsx',
          'src/components/ScaleDivider/ScaleDivider.jsx',
          'src/components/ScaleRadioButton/ScaleRadioButton.jsx',
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
