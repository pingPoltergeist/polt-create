const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
        vendor: path.resolve(__dirname, '../src/script/script.js')
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/template/home.html'),
            minify: true
        }),

        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, '../src/files/'), to: './files/'}]
        }),
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg|webp)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {   
                            name: '[name]-[hash].[ext]',
                            publicPath: 'assets/images/',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

            // Videos
            {
                test: /\.(mp4|avi|webm)$/,
                use:
                    [
                        {
                            loader: 'file-loader',
                            options:
                                {
                                    name: '[name]-[hash].[ext]',
                                    publicPath: 'assets/videos/',
                                    outputPath: 'assets/videos/'
                                }
                        }
                    ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            },

            // Files
            {
                test: /\.(doc|pdf)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'files/',
                        name: '[name].[ext]'
                    }
                }
                ]
            }
        ]
    }
}
