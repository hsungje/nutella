module.exports = {
    entry: './client/index.jsx',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            { 
                test: /\.(woff2?|svg)$/, 
                loader: 'url?limit=10000'
            },
            {
                test: /\.(ttf|eot)$/, loader: 'file' 
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
