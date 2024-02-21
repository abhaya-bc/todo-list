const path = require('path');
const entry = require('./webpack.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(entry, {
	mode: 'development',
	devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dev-pack"),
        assetModuleFilename: 'images/[name][hash:8][ext]'
    },    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource',
            }
        ]
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.css',
		}),
		new HtmlWebpackPlugin({
			// favicon: './src/img/icon.ico',
			// title: 'Document',
			template: './src/html/index.html',
			inject: 'head',
			filename: 'index.html',
			minify: {
				removeEmptyAttributes: 'true',
			},
		}),
		new CleanWebpackPlugin(),
	],
});
