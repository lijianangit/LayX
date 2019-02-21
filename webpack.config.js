const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    "mode": "production",// production|development
    "entry": "./src/index.ts",
    "output": {
        "filename": "layx.min.js",
        "path": __dirname + "/dist",
        "libraryTarget": "umd",
        "library": "layx",
        "libraryExport": "default"
    },
    "module": {
        "rules": [
            {
                "test": /\.css$/,
                "use": ExtractTextPlugin.extract({
                    "fallback": "style-loader",
                    "use": ["css-loader", "postcss-loader"]
                })
            },
            {
                "test": /\.ts?$/,
                "use": "ts-loader"
            },
            {
                "test": /\.(eot|ttf|woff|svg)$/,
                "use": 'file-loader'
            }
        ]
    },
    "resolve": {
        "extensions": [
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    "plugins": [
        new UglifyjsPlugin(),
        new OptimizeCSSAssetsPlugin({
            "assetNameRegExp": /\.style\.css$/g,
            "cssProcessor": require('cssnano'),
            "cssProcessorOptions": {
                "preset": ['default', {
                    "discardComments": {
                        "removeAll": true,
                    },
                    "normalizeUnicode": false,
                }]
            },
            "canPrint": true,
        }),
        new HtmlWebpackPlugin({
            "title": "Layx - Creative elements container.",
            "template": './index.html',
            "inject": "head",
            "hash": true
        }),
        new ExtractTextPlugin('layx.min.css')
    ],
    "optimization": {
        "minimizer": [new OptimizeCSSAssetsPlugin()],
    }
};