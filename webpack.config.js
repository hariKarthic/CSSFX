/**
 * Created by hmahad on 12/12/2016.
 */


var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ["./index.js"]
    },
    output:{
        path:path.join(__dirname,'/build/'),
        fileName:"bundle.js"
    },
    plugins:[
        new ExtractTextPlugin('bundle.css')
    ],
    module:{
        loaders:[
            {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel',
            query: {
                presets: ['es2015']
                }
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap'),
                exclude:/node_modules/

            }
            ]
    }
};