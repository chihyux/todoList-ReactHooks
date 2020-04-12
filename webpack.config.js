const path = require('path');
module.exports = {
    entry: {
        index: ['./app.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            { 
                test: /.jsx$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { presets: ['@babel/preset-react','@babel/preset-env'] } }
            }
        ]
    }
};