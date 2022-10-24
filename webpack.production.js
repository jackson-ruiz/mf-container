const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const port = 80;
const proceduresUrl = "http://localhost:8081";
const productionConfig = {
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf_container",
      filename: "remoteEntry.js",
      remotes: {
        mf_procedure: `mf_procedure@${proceduresUrl}/remoteEntry.js`,
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
module.exports = merge(commonConfig, productionConfig);
