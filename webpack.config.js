let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/')
    .addExternals()
    .setPublicPath('/')
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/css/app.scss')
    .addAliases()
    .enableSassLoader(function(options) {}, {
        resolveUrlLoader: false
    })
;


let config = Encore.getWebpackConfig();
config.output.library = 'XIVDB';
config.output.libraryExport = "default";
config.output.libraryTarget = 'var';
module.exports = config;
