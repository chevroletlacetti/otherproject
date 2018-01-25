var path = require('path');
var glob = require("glob");
var webpack = require("webpack");

module.exports = {
	entry: {
		dependencies: './js/dependencies.js',
		app: './js/app.js',
		components: glob.sync("./js/*/*/*.js"),
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	}
}
