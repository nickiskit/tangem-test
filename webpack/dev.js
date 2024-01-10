const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    historyApiFallback: true
  }
});
