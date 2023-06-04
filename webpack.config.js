const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/main.jsx",
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.[hash].js'
    },
    module: {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
    }
};