import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  target: 'node', // Target Node.js environment
  entry: './src/index.js', // Entry point for your Express API
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled code
    filename: 'bundle.js', // Bundle file for the API
  },
  externals: [nodeExternals()], // Exclude node_modules from bundling (it’s already available in the environment)
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader to all JS files
        exclude: /node_modules/, // Exclude node_modules
        use: 'babel-loader', // Use Babel to transpile the code
      },
    ],
  },stats: {
    errorDetails: true,  // Show detailed error/warning information
  },
  plugins: [
    ,
  ],
  mode: process.env.NODE_ENV || 'development', // Set mode to development or production
};
