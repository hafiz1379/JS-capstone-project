const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',

  devServer: {

    static: './dist',

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
      fonts: [
        { family: 'Zilla Slab' }, // Add 'Zilla Slab' to the fonts array
      ],
      formats: ['woff2', 'woff'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {

    runtimeChunk: 'single',

  },
};