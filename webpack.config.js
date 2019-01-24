
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


module.exports = {

    entry: "./screens/links.js", //relative to root of the application
    output: {
        filename: "./../dist/app.bundle.js" //relative to root of the application
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './dist/test.html',
            inject: 'body',
            inlineSource:  '.(js|css)$' //relative to root of the application
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]

}