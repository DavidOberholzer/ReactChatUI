module.exports = {
    type: 'react-component',
    npm: {
        esModules: false,
        umd: {
            global: 'ReactChatUI',
            externals: {
                react: 'React'
            }
        }
    }
};
