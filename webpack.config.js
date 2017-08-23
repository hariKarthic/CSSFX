/**
 * Created by hmahad on 12/12/2016.
 */


var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtools: 'cheap-eval-source-map',
    entry: path.join(__dirname, "/js/index.js"),
    output: {
        path: path.join(__dirname, '/build/'),
        filename: "bundle.js"

    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
                exclude: /node_modules/

            },

            {
                test: /\.(jpg|png|gif)$/,
                loaders: [
                    'file-loader',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
                ]
            }
        ]
    }
};