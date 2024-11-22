const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: './src/main.js', // 项目入口文件
  build: {
    assetsPublicPath: process.env.NODE_ENV === 'production' ? '/vue_test/' : '/',
  }
  output: {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue_test/' : '/',
    path: resolve('dist'),
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 处理 .vue 文件
        use: 'vue-loader',
      },
      {
        test: /\.js$/, // 处理 .js 文件
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // 处理 .css 文件
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      //vue$: 'vue/dist/vue.esm.js', // 指定 Vue 的完整版 vue3的不需要指定文件
      '@': path.resolve(__dirname, 'src'), // 配置 @ 别名指向 src
    },
    extensions: ['.js', '.vue', '.json'], // 自动解析的文件扩展名
  },
  plugins: [
    new VueLoaderPlugin(), // 必须添加这个插件以支持 vue-loader
    new HtmlWebpackPlugin({
      template: './src/index.html', // 指定 HTML 模板
      publicPath: process.env.NODE_ENV === 'production' ? '/vue_test/' : '/',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  mode: 'development', // 设置开发模式
};
