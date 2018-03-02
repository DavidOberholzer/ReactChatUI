module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
        umd: {
            global: 'ReactChatUI',
            externals: {
                react: 'React'
            }
        }
    }
};
