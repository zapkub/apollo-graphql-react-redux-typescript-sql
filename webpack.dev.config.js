var webpack = require('webpack');
var devConfig = require('./webpack.dev.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack for client
var argv = require('minimist')(process.argv.slice(2));
var ports = {
    hmr: argv.hmr || 3000,
    server: argv.server || 3001
}

module.exports = {
    entry: {
        bundle: [
            'babel-polyfill',
            'webpack-dev-server/client?http://127.0.0.1:' + (ports.hmr),
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            './src/client/index.tsx'
        ]
    },
    output: {
        libraryTarget: 'var',
        path: '/',
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                DEVELOPMENT: true,
                BROWSER: JSON.stringify(true)
            }
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: 'http://localhost:' + ports.hmr,
        publicPath: '/',
        stats: 'normal',
        hot: true,
        proxy: {
            '*': 'http://127.0.0.1:' + ports.server
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        host: '127.0.0.1'
    },
    resolve:{
        extensions: ['','.js','.jsx', '.ts', '.tsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                // exclude: /node_modules/,
                loader: 'babel!ts-loader?transpileOnly=true'
            }
        ]
    },
}