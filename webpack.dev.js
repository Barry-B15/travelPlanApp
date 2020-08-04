/* import path from('path');
import webpack from('webpack');
import HtmlWebPackPlugin from("html-webpack-plugin")
import { CleanWebpackPlugin } from('clean-webpack-plugin')
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//added this to fix: require is undefined
/* var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
 */
// END added this to fix: require is undefined END


module.exports = {
    mode: 'development',
    target: 'node', //target: 'web', didn't work for me. target: 'node' worked but led to another error: require undefined
    node: { fs: 'empty' },
    entry: './src/client/index.js',
    output: { // to output user text
        libraryTarget: 'var',
        library: 'Client',

        // require not defined error fix?
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
            // fix end , now run webpack on command line to create bundle.js
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