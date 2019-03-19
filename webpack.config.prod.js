const webpack = require('webpack');
const path = require('path');

const precss = require('precss');
const cssnext = require('postcss-cssnext');
const vars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: ['@babel/polyfill', 'react-hot-loader/patch', './src/index'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    noParse: /(mapbox-gl)\.js$/,
    rules: [
      {
        test: /\.js|\.ts|\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        },
        exclude: /node_modules/,
        include: path.join(__dirname, '/src'),
      },
      {
        test: /\.css?$/,
        use: [
          ExtractCssChunks.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { plugins: () => [...plugins] } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
        loaders: ['file-loader?name=font/[name].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
    alias: {
      constants: path.resolve(__dirname, './src/constants'),
      '@components': path.resolve(__dirname, './src/views/components'),
      '@containers': path.resolve(__dirname, './src/views/containers'),
      helpers: path.resolve(__dirname, './src/helpers'),
      reducers: path.resolve(__dirname, './src/domain/reducers'),
      selectors: path.resolve(__dirname, './src/domain/selectors'),
      store: path.resolve(__dirname, './src/domain/store'),
      actions: path.resolve(__dirname, './src/domain/actions'),
      '@typings': path.resolve(__dirname, './src/typings'),
      '@views': path.resolve(__dirname, './src/views'),
      '@services': path.resolve(__dirname, './src/domain/services'),
    },
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [precss, cssnext, vars, nested, mixins],
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin({
      cache: true,
    }),
    new ExtractCssChunks({
      filename: '[name].css',
      chunkFilename: '[id].css',
      hot: true,
      orderWarning: true,
      reloadAll: true,
      cssModules: true,
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        extractComments: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
