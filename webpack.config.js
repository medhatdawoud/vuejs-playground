module.exports = {
  entry: './src/main',
  output: {
    path: __dirname +'/build',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  }
}