if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    react: "./src/react.js",
    vanilla: "./src/vanilla.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: []
};

if (process.env.WEBPACK_BUNDLE_ANALYZER === "true") {
  const webpackBundleAnalyzer = require("webpack-bundle-analyzer");
  webpackConfig.plugins.push(new webpackBundleAnalyzer.BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
