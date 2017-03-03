var webpack = require('webpack');

module.exports = {
    entry: './eclipse.js',
    externals: {
        jquery: 'jquery'
    },
    output: {
        path: __dirname,
        filename: 'eclipse.js',
        library: 'eclipse',
        libraryTarget: 'umd',
        umdNamedDefine: false
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /(node_modules)/
            }
        ]
    },
    devtool: null
};