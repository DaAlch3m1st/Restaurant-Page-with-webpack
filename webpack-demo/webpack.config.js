const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Modo desarrollo
    entry: './src/index.js', // Archivo de entrada
    output: {
        filename: 'main.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Directorio de salida
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html', // Plantilla HTML
        }),
    ],
    devServer: {
        static: './dist', // Carpeta desde la que se sirven archivos
        port: 9000, // Puerto en el que se ejecutará el servidor
        open: true, // Abrir automáticamente el navegador
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // Carga CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};