const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'app.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/, use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ]
  }
}