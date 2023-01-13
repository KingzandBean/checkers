const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//http://localhost:8080/

//http://localhost:8080/api/myroute

// http://localhost:3000/myroute

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'test',
      template: path.resolve(__dirname, './client/index.html')
    })],
  devServer: {
    static: {},
    compress: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      }
    }
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          //plugins: ?
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          // "sass-loader",
        ]
      }
    ]
  }
}