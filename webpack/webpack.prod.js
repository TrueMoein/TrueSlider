const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/trueslider.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
