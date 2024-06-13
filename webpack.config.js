const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Not necessary to add. You can set the mode to 'development' or 'production
    // By default, Webpack will fall back to production mode if you do not explicitly set it.
    // development: Provides a faster build with useful error messages, non-minified code, and more developer-friendly settings.
    // production: Optimizes the build for deployment, which includes minifying the code and applying other performance optimizations.
    // none: Disables any default behavior and gives you full control over the configuration.
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // see step 7 in Webpack Cheatsheet
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // Add support for image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images', // Output directory for images
                            publicPath: 'images', // Public path for images
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map', // A useful dev debugger tool that maps the compiled code back to the original source code. Only for use in Development mode.
    // for other devtool options, see https://webpack.js.org/guides/development/
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html'
        })
    ],
    devServer: {
        static: {
     // './dist', // Shorter way to serve static files from 'dist' directory
            directory: path.join(__dirname, 'dist'), // Serve static files from 'dist' directory
        },
        compress: true, // Enables gzip compression.
        port: 9000, // The port on which the development server runs (9000).
        watchFiles: ['./src/index.html'] // Watch the HTML template for changes
    },
};
