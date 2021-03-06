
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name]-[contenthash]-bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [

            // SCSS
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    }
})