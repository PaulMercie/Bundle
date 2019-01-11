// Ajout des plugins après le telechargement
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')

module.exports = webpackMerge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            // Suppression du fichier dist avant de le recréer
            new CleanWebpackPlugin(
                [ 'dist' ],
                { root: path.resolve(__dirname, '..') }
            )
        ]
    }
)