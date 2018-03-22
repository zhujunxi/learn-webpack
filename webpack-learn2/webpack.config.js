const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry:__dirname + '/src/main.js',
    output:{
        filename:'app.[hash].js',
        path:__dirname + '/dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.styl$/,
                loader:'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(['./dist/*.*'],{
            root: __dirname,       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry:      false        　　　　　　　　　　//启用删除文件
        })
        
        
        
    ]
}