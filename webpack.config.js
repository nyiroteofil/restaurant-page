const { getFips } = require('crypto');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
       "app": "./src/app.js",
    },
    output: {
        filename: '[name].restaurant.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name].asset[ext]',
        clean: true,
    },
    devServer: {
        static: '/dist',
    },
    optimization: {
        runtimeChunk: 'single',
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Corinth Restaurant',
          template: './src/index.html',
        }),
      ],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)/i,
            type: 'asset/resource',
        }
    ]
    }
}