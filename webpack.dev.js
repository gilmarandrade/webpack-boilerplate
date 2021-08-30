const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    watchFiles: ['./src/**/*'],
    hot: true,
    port: 9000,
  },
});
