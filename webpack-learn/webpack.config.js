const webpack = require("webpack")
module.exports = {
    entry:__dirname + "/src/main.js",
    output:{
        path:__dirname + '/dist',
        filename:"bundle.js"
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ],
                exclude: /node_modules/
            },{
                test:/\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('朱俊曦吉安市大家圣诞节啊是')
    ],
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        port: "8788"
    }
}