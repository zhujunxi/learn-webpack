var htmlWebpackPlugin = require('html-webpack-plugin');

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
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}