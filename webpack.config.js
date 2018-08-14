module.exports = {
    entry: './config/index.js',
    output: {
        filename: '[name].bundle.js', 
        path: __dirname, 
        publicPath: __dirname
    }
};
