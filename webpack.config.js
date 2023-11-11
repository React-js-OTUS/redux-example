const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const port = 2002;
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');
const host = 'localhost';

module.exports = (_, args) => ({
  mode: 'development',
  target: 'web',
  entry: './index.tsx',
  devtool: 'source-map',
  context: src,
  devServer: {
    open: true,
    port,
    hot: true,
    historyApiFallback: true,
    host,
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      src,
    },
  },
  output: {
    path: dist,
    publicPath: `http://${host}:${port}/`,
    filename: `js/[name].js`,
    chunkFilename: `js/[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.svg',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.join(__dirname, 'tsconfig.json'),
      },
    }),
  ],
});
