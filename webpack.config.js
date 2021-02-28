const path = require('path'); 
const { web } = require('webpack');

const publicPathAbs = path.resolve(__dirname, 'public');

module.exports = {
    entry: './src/index.ts',
    module:{
        rules:[
            {
                test: /\.ts/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    mode: 'development',
    target: 'web',
    devServer:{
        historyApiFallback: true,
        hot: true,
        contentBase: publicPathAbs,
        publicPath: './public',
        open: false,
        watchContentBase: true,
        port: 8080,
    },
    output:{
        publicPath: './public',
        filename : 'bundle.js',
        path: publicPathAbs
    }
}