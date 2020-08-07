const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

//added this to fix: require is undefined 
//Fix for WARNING: in ./node_module/express/lib/view.js
var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
// END added this to fix: require is undefined END

// var Foo = require('foo');  is:     import Foo from 'foo';

module.exports = {
    mode: 'production',
    target: 'node',

    entry: './src/client/index.js',
    optimization: { // minimize css
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: { // to output user text
        libraryTarget: 'var',
        library: 'Client',

        //added this to fix: require is undefined
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
            // fix? end , now add dist/bundles to html and run webpack on command line to create bundle.js 
    },
    //externals: nodeModules, // Fix for WARNING: in ./node_module/express/lib/view.js

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
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // }
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //style-loader
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({ // minify the css files
            filename: "[name].css"
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