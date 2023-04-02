const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-source-map',
	devServer: {
		devMiddleware: {
			writeToDisk: true,
		},
		webSocketServer: false,
	},
	output: {
		path: path.resolve('./dist'),
		filename: 'main.js',
		publicPath: path.resolve('./dist')
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
}