module.exports = {
    entry: "../js/main",
    resolve: {
        modulesDirectories: [
            '../js',
            '../node_modules/'
        ]
    },
    output: {
        path: "../output/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test:   /\.html/,
                loader: 'html',
            }
        ]
    }
};
