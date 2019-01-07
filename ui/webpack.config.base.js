const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // generates an index.html

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    // can import anything in shared folder with the same syntax as if it was in node modules
    // i.e import foo from 'bar'
    // bar being a component under src/shared
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
