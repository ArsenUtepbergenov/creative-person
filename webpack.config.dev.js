import path from 'path';

export default {
    entry: path.join(__dirname, './static/public/js/index.js'),
    output: {
        filename: 'bundle.js',
        path: '/'
    }﻿,
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'static'),
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        extensions: [' ', '.js']
    }
}
