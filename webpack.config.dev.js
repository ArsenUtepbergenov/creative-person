import path from 'path';
import webpack from 'webpack';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

export default {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, './static/public/js/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: '/',
        publicPath: '/'
    }﻿,
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'styles.css'
        })
    ],
    module: {
        loaders: [
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
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js']
    }
}
