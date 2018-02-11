const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { AureliaPlugin, ModuleDependenciesPlugin, GlobDependenciesPlugin } = require("aurelia-webpack-plugin");
const bundleOutputDir = "./dist";
const nodeModules = path.join(process.cwd(), "node_modules");
const realNodeModules = fs.realpathSync(nodeModules);
const WebpackDeletePlugin = require("webpack-delete-plugin");

function copyToRawRecursive(dir) {
	fs.readdirSync(dir).forEach(it => {
		const itsPath = path.resolve(dir, it);
		const itsStat = fs.statSync(itsPath);

		if (itsStat.isDirectory()) {
			copyToRawRecursive(itsPath);
		}
		else if (dir !== "src/samples") {
			if (itsPath.endsWith(".html") || itsPath.endsWith(".ts") || itsPath.endsWith(".css") || itsPath.endsWith(".md")) {
				fs.copyFileSync(itsPath, itsPath + ".raw");
			}
		}
	})
}

console.log("Creating raw files for code examples...");
copyToRawRecursive("src/samples");

module.exports = (env) => {
	const isDevBuild = !(env && env.prod);
	return [{
		entry: { "app": ["es6-promise/auto", "aurelia-bootstrapper"] },
		resolve: {
			extensions: [".ts", ".js"],
			modules: ["src", "node_modules"]
		},
		output: {
			path: path.resolve(bundleOutputDir),
			publicPath: "dist/",
			filename: "[name].js",
			chunkFilename: "[name].js"
		},
		module: {
			rules: [
				{ test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?|$)/, loader: "url-loader?limit=100000" },
				{ test: /\.ts$/i, include: [/src/], use: "ts-loader?silent=false" },
				{ test: /\.html$/i, use: "html-loader" },
				{ test: /\.json$/i, use: "json-loader" },
				{ test: /\.md$/i, use: "null-loader" },
				{ test: /\.raw$/i, use: "raw-loader" },
				{ test: /\.css$/i, use: isDevBuild ? "css-loader" : "css-loader?minimize" },
				{
					test: /\.scss$/i,
					use: [
						{ loader: isDevBuild ? "css-loader" : "css-loader?minimize" },
						{ loader: "sass-loader" }
					]
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({ IS_DEV_BUILD: JSON.stringify(isDevBuild) }),
			new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", "window.jQuery": "jquery" }),
			new AureliaPlugin({ aureliaApp: "main", includeAll: "src" }),
			new ModuleDependenciesPlugin({ "aurelia-materialize-bridge": ["./click-counter"] }),
			new webpack.optimize.CommonsChunkPlugin({
				"name": ["vendor"],
				"minChunks": (module) => {
					return module.resource && (module.resource.startsWith(nodeModules) || module.resource.startsWith(realNodeModules));
				},
				"chunks": ["app"]
			}),
			new WebpackDeletePlugin(["./src/**/*.raw"])
		].concat(isDevBuild ? [
			new webpack.SourceMapDevToolPlugin({
				filename: "[file].map", // Remove this line if you prefer inline source maps
				moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]")  // Point sourcemap entries to the original file locations on disk
			})
		] : [
				new webpack.optimize.UglifyJsPlugin()
			])
	}];
};