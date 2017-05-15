const webpack = require('webpack');
const merge = require('webpack-merge');
const { context, vendor, distPath, publicPath, base, }= require('./webpack.config.base');

module.exports = merge(base('development'), {
  devtool: 'source-map',
  context,
  entry: {
    bundle: 'index.jsx',
    vendor,
  },
  output: {
    path: distPath,
    filename: '[name].[hash].js',
    publicPath,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_URL: JSON.stringify('http://138.197.65.89:9000'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    // host must be set to enable accessing server from localhost:${PORT} when devServer running in docker
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8000,
    contentBase: context,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 200,
    },
  },
});
