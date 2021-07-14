const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DevEnv',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080,
    },
    // resolve: {
    //     fallback: {
    //       "https": require.resolve("https-browserify"),
    //       "http": require.resolve("stream-http"),
    //       "os": require.resolve("os-browserify/browser"),
    //       "crypto": require.resolve("crypto-browserify"),
    //       "stream":require.resolve("stream-browserify"),
    //       "assert": require.resolve("assert/")
    //     }
    //   }
}