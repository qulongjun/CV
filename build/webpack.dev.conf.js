var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');


config.output.publicPath = '/';

config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'html-withimg-loader!' + path.resolve(__dirname, '../app/cn/index.html'),
        inject: true,
        chunks:['index']
    }),
    new HtmlWebpackPlugin({
        filename: 'en.html',
        template: 'html-withimg-loader!' + path.resolve(__dirname, '../app/en/index.html'),
        inject: true,
        chunks:['en']
    }),
    new ExtractTextPlugin("[name].[hash].css")
];

// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;