const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const basePath = process.cwd();

const paths = {
    root: '',
}

paths.assets = `assets/`,
paths.css = `${paths.assets}css/`,
paths.sass = `${paths.assets}sass/`,
paths.images = `${paths.assets}images/`,
paths.js = `${paths.assets}js/`,

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        path: path.join(basePath, `dist/`),
        filename: `${paths.js}index.js`
    },
    module:  {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `${paths.images}[name].[hash:8].[ext]`,
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/diensten.html",
            filename: "./diensten.html",
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: `${paths.css}[name].[contenthash].css`,
            chunkFilename: "[id].css"
        }),
    ],
    devServer: {
        port: 8080,
        open: true,
    },
}