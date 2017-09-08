require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var mode = process.argv[2]
var webpackConfig
var buildConfig
if (mode === 'docs') {
  buildConfig = config.docs
  webpackConfig = require('./webpack.docs.conf')
} else {
  buildConfig = config.dist
  webpackConfig = require('./webpack.dist.conf')
}

var spinner = ora('building for production...')
spinner.start()

rm(path.join(buildConfig.assetsRoot, buildConfig.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
  })
})
