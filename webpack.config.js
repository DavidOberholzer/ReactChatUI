const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './react/main.js',
    output: {
        path: __dirname + '/src/',
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'stage-0', 'env'],
                            plugins: ['transform-object-rest-spread', 'transform-react-jsx']
                        }
                    }
                ]
            },
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
    ],
    externals: {
        react: 'commonjs react'
    }
};
