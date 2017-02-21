const path = require('path');
const webpack = require('webpack');
var babel = require('babel-core');

module.exports = () => {
	return {
		entry: './public/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		devtool: 'source-map',
		module: {
			rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}, {
				test: /components\//,
				loader: 'web-components-loader',
				options: {
					transformJs: rawCode => {
						return babel.transform(rawCode, {
							presets: ['es2015']
						}).code;
					}
				}
			}]
		}
	}
}