var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
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
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: [ 'env', 'react' ],
					plugins: [ 'transform-object-rest-spread' ]
				}
			},
			{
				test: /\.(css|scss)/,
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
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
	
	plugins: PROD ? [
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		}),
		new ExtractTextPlugin('bundle.css'),
		new OptimizeCssAssetsPlugin(),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './../index.html'
		}),
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	] : [
		new ExtractTextPlugin('bundle.css'),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './../index.html'
		})
	]
}