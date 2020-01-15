const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebPackPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",    // 编译环境：development | production
    devtool: "inline-source-map",
    entry: path.join(__dirname, "app", "index.ts"),
    output: {
        filename: "layx.js",
        path: path.join(__dirname, "dist"),
        libraryTarget: "umd",
        library: "layx",
        libraryExport: "default"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    MiniCssExtractWebpackPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {}
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractWebpackPlugin({
            filename: "layx.css"
        }),
        new OptimizeCssAssetsWebPackPlugin({
            assetNameRegExp: /\.style\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions: {
                preset: [
                    "default",
                    {
                        discardComments: {
                            removeAll: true
                        },
                        normalizeUnicode: false
                    }
                ]
            },
            canPrint: true
        }),
        new HtmlWebPackPlugin({
            title: "Layx 窗口即入口，入口即天地",
            template: path.join(__dirname, "template.html"),
            inject: "head",
            hash: true
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin(),
            new OptimizeCssAssetsWebPackPlugin()
        ]
    }
}