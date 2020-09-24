const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-build.js'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    devServer: {
        baseContent: path.resolve(__dirname, './dist'),// 静态资源根目录
        host: 'localhost',//服务器IP地址，默认是localhsot
        port: 5527,//服务监听的端口号
        compress: true,// 是否开启服务端压缩（gzip）
    }
}