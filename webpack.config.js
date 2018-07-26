const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "./client/src/"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  
  module: {
    loaders: [
        
        {
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            loaders: [
                'babel'
            ]
        }
    ]
  },
  
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
