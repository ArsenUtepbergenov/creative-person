import path from 'path';
import webpack from 'webpack';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

export default {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, './static/public/js/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    }﻿,
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true,
            disable: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                include: path.join(__dirname, 'static/public/js'),
                loaders: [ 'babel-loader' ]
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'static/public/scss'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.mp3$/,
                include: path.join(__dirname, 'static/public/mp3'),
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
}
