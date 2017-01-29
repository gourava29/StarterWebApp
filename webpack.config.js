module.exports = {
  devtool: 'sourcemap',
  entry: './client/app/app.js',
  output: {
    filename: './client/build/bundle.js'
  },
  module: {
    loaders: [
        {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
        {test: /\.html$/, loader: 'raw'},
        {test: /\.css$/, loader: 'style!css'},
        {test: /\.styl$/, loader: 'style!css!stylus'},
        {test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url'}
    ]
  }
};