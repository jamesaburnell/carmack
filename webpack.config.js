var HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path')
var PROD = false

module.exports = {
	context: __dirname + '/src',
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	devServer: {
		historyApiFallback: true,
		port: 8888,
		compress: true,
		contentBase: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
			},
			{
				test: /\.(css|scss)/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					"css-loader"
				]
			},
			{
				test: /\.(jpg|png|eot|woff2|woff|ttf|svg|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=[name].[ext]'
			},
			{
			    test: require.resolve("wavesurfer.js"),
			    loader: "expose-loader?WaveSurfer"
			}
		]
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	watch: true,
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new MiniCssExtractPlugin({filename: "[name].css"}),  
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './../index.html'
		})
	]
}