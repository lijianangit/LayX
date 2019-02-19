module.exports = {
    "mode": "development",
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
                "test": /\.ts?$/,
                "loader": "ts-loader"
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