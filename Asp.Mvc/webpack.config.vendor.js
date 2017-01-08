var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('vendor.css');

let ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000&name=[hash:8].[ext]' },
      { test: /\.css(\?|$)/, loader: extractCSS.extract(['css']) }
    ]
  },
  entry: {
    vendor: [
      // 'antd',
      // 'antd/dist/antd.css',
      'bootstrap',
      'bootstrap/dist/css/bootstrap.css',
      'echarts',
      'react',
      'react-bootstrap',
      'react-dom',
      'react-router',
      'style-loader',
      'jquery'],
  },
  output: {
    path: path.join(__dirname, 'wwwroot', 'dist'),
    // publicPath: '/dist/',
    filename: '[name].js',
    library: '[name]_[hash]',
  },
  plugins: [
    extractCSS,
    // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), 
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
      name: '[name]_[hash]'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
    })
    ,
    new ProgressBarPlugin()
  ].concat(isDevBuild ? [] : [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ])
};
