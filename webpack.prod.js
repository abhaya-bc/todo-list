const path = require('path');
const entry = require('./webpack.config');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(entry, {
	mode: 'production',
	output: {
		filename: 'bundle.[contenthash:8].js',
		path: path.resolve(__dirname, 'public'),
		assetModuleFilename: 'images/[name][hash:8][ext]',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.[contenthash:8].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/html/index.html',
			// favicon: './src/img/icon.ico',
			inject: 'head',
			filename: 'index.[contenthash:8].html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true,
			},
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimizer: ['...', new CssMinimizerWebpackPlugin()],
	},
});
