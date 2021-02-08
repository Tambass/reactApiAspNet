const path = require("path")

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // Retrouver les fichiers CSS ds Chrome, il crée un mapping
  context: path.resolve(__dirname), // il garde le chemin du fichier de config.
  entry: "./front/index.js", // Notre entrée
  resolve: { extensions: ['*', '.js'] }, // Il rentre ds "entry" puis check tous les fichiers puis les compiles
  module: {
    rules: [
      {
        test: /\.css$/, // Regex
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'linkTag'
            }
          },
          { 
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/src/'
            },
          },
      ]
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] } // Compile le code React
      }
    ]
  },
  output: {
    path: path.resolve('public/dist'),
    filename: "front.js"
  }
}