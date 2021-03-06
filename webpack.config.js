module.exports = {
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },

    output: {
        library: 'ScrollArea',
        libraryTarget: 'umd'
    },

    externals: [
    {
      "react": {
          root: "React",
          commonjs2: "react",
          commonjs: "react",
          amd: "react"
      }
    }],

    module: {
        loaders: [
            { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel', query: {
                    optional: ['runtime'],
                    stage: 0
                }
            },
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    },
    devtool: "inline-source-map"
};
