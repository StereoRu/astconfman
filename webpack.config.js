var path = require('path')
var webpack = require('webpack')
//var NpmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'source-map',
  entry: [
    './astconfman/src/index'
  ],
  output: {
    path: path.join(__dirname, '/astconfman/static/'),
    filename: 'bundle.js',
    publicPath: 'astconfman/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
//    new NpmInstallPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "astconfman/src"),
        ],
      }
    ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(__dirname, "astconfman/src"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test:   /\.css$/,
        include: [
          path.resolve(__dirname, "astconfman/static/css"),
        ],
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
}
