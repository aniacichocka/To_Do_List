//Konfiguracja Webpack
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: ["./js/project.jsx", "./scss/main.scss"],
    output: { filename: "./js/out.js" },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    module: {
        loaders: [ {
            test: /\.jsx$/, exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'stage-2', 'react'] }
        },
        {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract('css-loader!sass-loader')
     }
        ]
    },
    plugins: [
     new ExtractTextPlugin('public/style.css', {
         allChunks: true
     })
   ]
}
