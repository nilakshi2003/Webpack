// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
  // The entry point of your app
  entry: './src/index.js',

  // The output bundle
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
  },

  // Enable source maps for debugging
  devtool: 'inline-source-map',

  // DevServer configuration with fallback for SPA routing
  devServer: {
    static: './dist',
    historyApiFallback: true, // For SPA: redirects 404s to /index.html
    open: true,
  },

  // Module rules to handle different file types
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, // Match both .sass and .scss files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Turns CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
      // If needed, add a rule for JavaScript (e.g., with Babel) here.
      // For vanilla JS, this may not be necessary.
    ],
  },

  // Plugins to enhance Webpack's functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use our custom HTML file
    }),
    new CopyWebpackPlugin({
      patterns: [
          { from: 'src/components', to: 'components' }, // Copies components folder to dist
          {from: 'src/assets', to: 'assets'},
          
      ],
  }),
  ],
  
};