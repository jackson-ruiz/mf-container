const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const port = 3000;
const proceduresUrl = "http://localhost:3001";
const developmentConfig = {
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
module.exports = merge(commonConfig, developmentConfig);
