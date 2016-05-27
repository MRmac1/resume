var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './components/resumeTest1.jsx', //入口文件
    output: {
        path: path.join(__dirname, '/public/javascripts/'),
        publicPath: "/public/javascripts/",
        filename: 'resumeTest1.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders: [
            //转码jsx与css
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css?$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        //测试webpack插件，此插件是在编译文件前加一行注释
        new webpack.BannerPlugin('This file is created by tracyzhou'),
        //使用ProvidePlugin使jQuery全局都可以访问
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};