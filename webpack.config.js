let path = require('path');

module.exports = ( env, argv ) => {

    let config = {
        entry: './src/index.ts',
        output: {
            filename: 'npm-tooling-workshop-v1.0.0.js',
            path: __dirname + '/dist/js/'
        },
        resolve: {
            // add '.ts' and '.tsx' as resolvable extensions.
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.jsx',
                '.json'
            ]
        },
    };

    // enable sourcemaps for debugging webpack's output.
    if ( argv.mode === 'development' ) {
        config.devtool = 'source-map';
    }

    config.module = {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },

            // all output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.resolve( __dirname, 'node_modules/mutationobserver-shim' ),
                ]
            },
        ],
    };

    if ( argv.mode === 'production' ) {
        config.optimization = {
            minimize: true
        };
    }

    config.externals = {
        // 'react-dom': 'ReactDOM',
        // 'matter-js': 'Matter',
    }

    config.devServer = {
        host: 'localhost',
        port: 1234,
        watchContentBase: true,
        publicPath: '/js/',
        contentBase: __dirname + '/dist/'
    };

    return config;
};
