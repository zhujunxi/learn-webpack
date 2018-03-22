const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:__dirname + '/src/main.js',
    output:{
        filename:'app.[hash].js',
        path:__dirname + '/dist'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.styl$/,
                use:['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name:'img/[name].[hash:7].[ext]',
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['./dist/*'],{
            root: __dirname,       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry:      false        　　　　　　　　　　//启用删除文件
        }),
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}