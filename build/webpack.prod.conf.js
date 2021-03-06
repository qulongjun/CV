var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.vue = {
    loaders: {
        css: ExtractTextPlugin.extract("css")
    }
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // 压缩代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 提取css为单文件
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

module.exports = config;