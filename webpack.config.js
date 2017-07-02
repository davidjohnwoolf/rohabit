let path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/js/main.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: '/node_modules/'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        publicPath: '/dist/js',
        filename: 'bundle.js'
    }
}
