const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { context, vendor, distPath, publicPath, base, }= require('./webpack.config.base');

module.exports = merge(base('production'), {
  context,
  entry: {// use babel-polyfill to enable new javascript features on old IE:s
    bundle: [ 'babel-polyfill', 'index.jsx', ],
    vendor,
    publicPath,
  },
  output: {
    path: distPath,
    filename: '[name].[chunkhash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin([ distPath, ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_URL: JSON.stringify('http://138.197.65.89:9000'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false, }),
  ],
});
