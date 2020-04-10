const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          { test: /\.js$/, include: /src/, loader: "babel-loader" }
        ]
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        port: 8888,
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),   // 当开启 HMR 的时候使用该插件会显示模块的相对路径，便于查看要修补的依赖
        new webpack.HotModuleReplacementPlugin(),   //hmr插件
        new HtmlWebpackPlugin({
            template: './test/index.html'
        })
    ]
}