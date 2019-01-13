module.exports = {
    entry: ['./app/controllers/main.ts'],
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    output: {
      filename: 'bundle.js',
      path: __dirname
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.ts$/,
          use: ['ts-loader']
        }
        // {
        //   test: /\.(s*)css$/,
        //   use: ['style-loader', 'css-loader', 'sass-loader']
        // },
        // {
        //   test: /\.(png|jp(e*)g|svg)$/,
        //   use: [{
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8000, // Convert images < 8kb to base64 strings
        //       name: 'images/[hash]-[name].[ext]'
        //     }
        //   }]
        // }
  
      ]
    }
  };