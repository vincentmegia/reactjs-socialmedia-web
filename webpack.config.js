const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		index: {
			import: "./src/index.tsx"
		}
	},
	mode: "none",
	target: "web",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[chunkhash:8].bundle.js",
		chunkFilename: '[name].[chunkhash:8].bundle.js',
		clean: true
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
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
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, 
					// "style-loader",
					"css-loader", 
					{
						loader: "postcss-loader",
						options: {
						  postcssOptions: {
							plugins: [
							  [
								require("precss"),
								require("autoprefixer")
							  ]
							]
						  }
						}
					},
					"sass-loader"]
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/"
						}
					}
				]
			  }
        ]
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
		new MiniCssExtractPlugin({
			filename: "bundle.[chunkhash:8].css"
		})
    ]
}