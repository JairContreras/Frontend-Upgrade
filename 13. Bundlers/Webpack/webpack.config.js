const HttmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: "node_modules",
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            },
         {
             test: /\.html$/,
             use: [
                 {
                     loader: "html-loader",
                     options: {minimize: true}
                 }
             ]
         }   
        ]
    },
    plugins: [
        new HttmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}