const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// TODO multiples entry points
// TODO otimização imagens
// TODO gerar documentação com outra instancia do webpack!
module.exports = {
  entry: {
    app: "./src/app/main.js"
  },
  output: {
    filename: "static/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist/"),
    /* É necessário setar publicPath para que o hot reload funcione corretamente */
    // publicPath: '/dist/' 
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        }       
      },
      {
        // extract images (except svg)
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/img/[name][ext]',
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          // {
          //   // inject CSS to page via style tag
          //   loader: 'style-loader'
          // },
          {
            //extract css into separate file
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: [
                  [
                    "autoprefixer",
                    {},
                  ],
                ],
              },
            },
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        // automatically imports assets encountered inside html files
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  plugins: [
    // extract html files
    new HtmlWebpackPlugin({
      template: "./src/app/templates/index.html",
      filename: 'index.html',
      // publicPath: "/",
      inject: "body",
      meta: {
        'viewport': 'width=device-width, initial-scale=1',
      },
      minify: false,
    }),
    // extract css file
    new MiniCssExtractPlugin({
      filename: "static/css/[name].bundle.css"
    }),
  ],
};
