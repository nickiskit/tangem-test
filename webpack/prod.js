const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    ...common.output,
    publicPath: '/tangem-test/',
  }
});
