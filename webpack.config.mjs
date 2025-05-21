import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/js`
  },
  watch: true,
  devtool: "source-map",
  module: {}
};
