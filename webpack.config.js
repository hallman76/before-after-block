

module.exports = {
	entry: './src/blocks.js',
	output: {
		path: __dirname,
		filename: './dist/blocks.build.js',
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /.jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	}

};