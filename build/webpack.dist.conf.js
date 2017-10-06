var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var package = require('../package.json')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'yoga-ui': resolve('src')
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true
    })
  },
  devtool: false,
  output: {
    path: config.dist.assetsRoot,
    filename: utils.assetsPath('[name].js'),
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(package.name + ' v' + package.version + ' by yanm1ng (c) ' + new Date().getFullYear()),
    new webpack.DefinePlugin({
      'process.env': config.dist.env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('[name].css')
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dist.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = webpackConfig
