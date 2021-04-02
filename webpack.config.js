const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	mode: "none",
	target: "web",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [ "ts-loader" ]
			},
			// {
			// 	enforce: "pre",
			// 	test: /\.js$/,
			// 	use: [
			// 		{ loader: "source-map-loader" }
			// 	]
			// },
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader"]
            },
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				  }
				]
			  }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        })
    ]
}