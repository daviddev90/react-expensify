const path = require('path');

module.exports = {
  entry: './src/app.js',
  // entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, //.js로 끝나는 파일은 싹 다 바벨을 돌리라는 뜻
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',  //여러 종류가 있으니 webpack.js.org에서 확인 가능
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
