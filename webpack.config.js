const path = require('path');

module.exports = [
  {
    name: 'dev',
    entry: './src/dug.ts',
    mode: 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      path: path.join(__dirname, '/lib'),
      filename: 'dug.dev.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    optimization: {
      usedExports: true
    }
  },
  {
    name: 'prod',
    entry: './src/dug.ts',
    mode: 'production',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      path: path.join(__dirname, '/lib'),
      chunkFilename: '[id].bundle.js',
      filename: 'dug.production.min.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    }
  }
];
