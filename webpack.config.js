module.exports = {
    "mode": "development",// production|development
    "entry": "./src/index.ts",
    "output": {
        "filename": "layx.js",
        "path": __dirname + "/dist",
        "libraryTarget": "umd",
        "libraryExport": "default"
    },
    "devtool": "source-map",
    "module": {
        "rules": [
            {
                "test": /\.css$/,
                "use": ["style-loader", "css-loader", "postcss-loader"]
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
    }
};