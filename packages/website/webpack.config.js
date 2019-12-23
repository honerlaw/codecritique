var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/bootstrap.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: 'tslint-loader'
            }
        ]
    }
};
