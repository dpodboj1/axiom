import webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';
import * as config from '../config';
import { js, json, yml, markdown } from './loader.config.js';

export default {
  target: 'node',
  context: __dirname,
  cache: false,
  debug: false,
  devtool: 'source-map',
  entry: [
    config.entries.styleGuide.server,
  ],
  output: {
    path: config.output.path,
    filename: config.output.styleGuide.serverDevJSFilename,
  },
  resolveLoader: {
    modulesDirectories: [
      'node_modules',
      'webpack/loaders',
    ],
  },
  plugins: [
    ...config.webpack.aliases,
    new webpack.DefinePlugin({
      ...config.webpack.globals,
      __CLIENT__: false,
      __SERVER__: true,
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
  externals: [webpackNodeExternals()],
  module: {
    loaders: [js, json, yml, markdown],
  },
};
