const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/', //bundleしたjsファイルの出力先の相対pathを指定（htmlファイルを基準）
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 8081,
    hot: true,
    static: {
      directory: './', // "./"でも可。contentBaseオプションはv3までしか使えない。]
    },
  }

};
