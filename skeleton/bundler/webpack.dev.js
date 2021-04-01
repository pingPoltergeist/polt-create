const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require("path")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            // SCSS
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
})
