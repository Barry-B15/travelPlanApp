/* import path from('path');
import webpack from('webpack');
import HtmlWebPackPlugin from("html-webpack-plugin")
import { CleanWebpackPlugin } from('clean-webpack-plugin')
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/client/index.js',
    output: { // to output user text
        // require not defined error fix?
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // fix? end , now add dist/bundles to html and run webpack on command line to create bundle.js

        libraryTarget: 'var',
        library: 'Client'
    },
    devServer: {
        port: 8000,
    },
    devtool: 'source-map',
    stats: 'verbose',

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}

//module.exports = [serverConfig, clientConfig];