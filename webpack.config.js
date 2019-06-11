const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const glob = require("glob");

const getExampleNames = () => {
    let names = [];

    const testFilesPath = path.join("examples", `**/*.tsx`);
    const subResult = glob.sync(testFilesPath);
    names = [...names, ...subResult];

    return names.map(p => path.basename(p, ".tsx"));
};

const getEntries = () => {
    let entry = {};

    for (let name of getExampleNames()) {
        entry[name] = `./examples/${name}.tsx`;
    }

    return entry;
};

const getHtmlPlugins = () => {
    let plugins = [];

    for (let name of getExampleNames()) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: `${name}.html`,
                chunks: [name],
                meta: {
                    viewport:
                        "width=device-width, initial-scale=1, shrink-to-fit=no"
                }
            })
        );
    }

    return plugins;
};

module.exports = () => ({
    entry: getEntries(),
    output: {
        filename: "./[name].js",
        path: path.resolve(__dirname, "docs")
    },
    devtool: "source-map",

    resolve: {
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.css$/,
                use: "style-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
				test: /\.(png|jpg|gif|svg|swf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
			{
				test: /\.(woff|woff2|ttf|eot)([\?]?.*)$/,
				loader: 'file-loader?name=fonts/[name]-[hash:6].[ext]'
			}
        ]
    },

    plugins: getHtmlPlugins()
});
