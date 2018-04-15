const path = require("path");

module.exports = {
    entry:  ["./js/project.jsx", "./css/style.css" ],
    output: {filename: 'out.js',
        path: path.resolve(__dirname,'./js')},
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    mode: 'development',
    devtool: "source-map",
    watch: true,
    module: {
        rules: [
            {
            test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                },
            },
            {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
                publicPath: 'fonts',
                outputPath: 'fonts'
                }
            }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env", "stage-2", "react"]
                    }
                }
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            },
            {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('precss'),
                                new require('autoprefixer')()
                            ]
                        }
                    },
                'sass-loader'
                ]
            }
        ]
    }
}
