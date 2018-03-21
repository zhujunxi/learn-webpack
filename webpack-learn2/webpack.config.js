var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:__dirname + '/src/main.js',
    output:{
        filename:'app.[hash].js',
        path:__dirname + '/dist'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}