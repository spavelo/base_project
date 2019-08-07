const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'app.js'
  },
  devServer: {
    contentBase: [path.resolve(__dirname)],
    watchContentBase: true
  },
  watch: true,
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
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // include: SRC,
            use: [{
                loader: 'file-loader'
            }]
      }
    ]
  }
}