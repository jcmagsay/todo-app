const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const CLIENT_PATH = path.resolve(__dirname, './client');
const PUBLIC_PATH = path.resolve(__dirname, './public');

const config = {
  entry: {
    app: `${CLIENT_PATH}/scripts/main.js`,
  },
  output: {
    filename: 'app.js',
    path: PUBLIC_PATH
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: `${CLIENT_PATH}/scripts`,
        loader: 'babel',
        options: { presets: ['es2015', 'react', 'stage-0'] }
      },
      {
        test: /\.css$/,
        loader: ['css-hot'].concat(ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]'
              }
            },
            {
              loader: 'postcss',
            },
          ],
        })),
      },
      {
        test: /\.html/,
        loader: 'html',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      ignoreOrder: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    'alias': {
      'actions': `${CLIENT_PATH}/scripts/actions`,
      'components': `${CLIENT_PATH}/scripts/components`,
      'containers': `${CLIENT_PATH}/scripts/containers`,
      'reducers': `${CLIENT_PATH}/scripts/reducers`,
      'scripts': `${CLIENT_PATH}/scripts`,
      'services': `${CLIENT_PATH}/scripts/services`,
      'styles': `${CLIENT_PATH}/styles`
    },
    extensions: ['.css', '.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  'resolveLoader': {
    'moduleExtensions': ['-loader']
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    hot: true,
    port: 8005,
  }
};

module.exports = config;
