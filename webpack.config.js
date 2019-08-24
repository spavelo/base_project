const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'app.js'
  },
  devServer: {
    contentBase: [path.resolve(__dirname)],
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html'
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ]
      },
      {
        test: /\.(gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "img/[name].[ext]",
          },
        }]
      }
    ]
  }
}