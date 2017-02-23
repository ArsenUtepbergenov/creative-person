import path from 'path';
import webpack from 'webpack';

export default {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, './static/public/js/index.js'),
    ],
    output: {
        filename: 'bundle.js',
        path: '/',
        publicPath: '/'
    }﻿,
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            include: path.join(__dirname, 'static'),
            loaders: [ 'babel-loader' ]
        }]
    },
    resolve: {
        extensions: [' ', '.js']
    }
}
