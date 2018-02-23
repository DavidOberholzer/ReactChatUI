const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './react/main.js',
    output: {
        path: __dirname + '/src/',
        filename: 'react-chat-ui.js',
        publicPath: '/src/'
    },
    module: {
        rules: [
            {
                test: /\.s[c|a]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: []
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true }
                        }
                    ]
                }),
                include: __dirname + '/react/styles/main.scss'
            },
            {
                test: /\.s[c|a]ss$/,
                enforce: 'pre',
                loader: 'import-glob-loader'
            }
        ]
    },
    plugins: [
        // Output extracted CSS to a file
        new ExtractTextPlugin('react-chat-ui.css')
    ]
};
