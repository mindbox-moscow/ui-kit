module.exports = () => ({
    entry: './components/index.ts',
    output: {
        filename: 'index.js'
    },
    devtool: 'source-map',

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader'
          },
          {
            test: /\.css$/,
            use: 'style-loader'
          }
        ]
    },
});
