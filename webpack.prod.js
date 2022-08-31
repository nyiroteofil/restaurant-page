const { getFips } = require('crypto');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
       "app": "./src/app.js",
    },
    output: {
        filename: '[name].restaurant.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name].asset[ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Corinth Restaurant',
          favicon: "./src/imgs/favicon.ico",
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