const path = require('path');

module.exports = {
    mode: "development",    // 编译环境：development | production
    devtool: "inline-source-map",
    entry: path.join(__dirname, "src", "index.ts"),
    output: {
        filename: "layx.min.js",
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
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    }
}