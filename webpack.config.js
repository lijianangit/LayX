const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsWebPackPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "layx.min.js",
        path: __dirname + "/dist",
        libraryTarget: "umd",
        library: "layx",
        libraryExport: "default"
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/, use: [
                    MiniCssExtractWebpackPlugin.loader,
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "A magical window. - Layx",
            template: "./template.html",
            inject: "head",
            hash: true
        }),
        new MiniCssExtractWebpackPlugin({
            filename: "layx.min.css"
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
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebPackPlugin()
        ]
    }
};