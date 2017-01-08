var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let ProgressBarPlugin = require('progress-bar-webpack-plugin');

var bundleOutputDir = './wwwroot/dist';
module.exports = {
  devtool: isDevBuild ? 'cheap-module-eval-source-map' : null,
  entry: { 'main': './Web/boot.tsx' },
  resolve: { extensions: ['', '.js', '.jsx', '.ts', '.tsx'] },
  output: {
    path: path.join(__dirname, bundleOutputDir),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, include: /Web/, loader: 'babel-loader', query: { cacheDirectory: true } },
      { test: /\.tsx?$/, include: /Web/, loader: 'ts', query: { silent: true } },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=5000&name=[hash:8].[ext]' }
    ]
  },
  // externals部分实现了esri|dojo|dijit的调用 how???
  externals: [
    {
    },
    function (context, request, callback) {
      if (/^(esri|dojo|dijit)\//.test(request)) {
        return callback(null, "dojo.require('" + request + "')");
      }
      callback();
    }
  ],

  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./wwwroot/dist/vendor-manifest.json')
    }),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
    ,
    new ProgressBarPlugin()
  ].concat(isDevBuild ? [] : [
    // Plugins that apply in production builds only
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    // ,
    // new ExtractTextPlugin('site.css')
  ])
};
