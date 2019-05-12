var webpack = require('webpack');
var path = require('path');

var dist_dir = path.resolve(__dirname,'dist');
var src_dir = path.resolve(__dirname,'src');

module.exports = {
    entry: src_dir + '/app/index.js',
    output: {
        path: dist_dir + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    target: 'web', // update from 23.12.2018
    module: {
        rules: [ 
            {
                test: /\.js$/,
                include: src_dir,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env','react','stage-2']
                }
            }
        ]
    }
}