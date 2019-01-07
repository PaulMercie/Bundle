const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:
    {
        filename: 'bundle.js',
        // Librairie qui permet de générer les chemins pour tous les ordis
        path: path.resolve(__dirname, '../dist')
    },
    // Recreer le fichier html dans le dossier dist
    plugins:
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html') 
        })
    ],
    module:
    {
        rules:
        [
            {
                test: /\.css$/,
                use:
                [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // Sélectionne tous les fichiers qui se finissent par ces infos (Regex)
                test: /\.(jpg|png|svg|gif)$/,
                // Utilise le loader installé sur tous les fichiers séléctionnés
                use:
                [
                    {
                        loader: 'file-loader',
                        // Creer un dossier au lieu d'avoir l'image à la racine
                        options:
                        {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2|woff|otf|eot|ttf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use:
                [
                    'html-loader'
                ]
            }
        ]
    }
}