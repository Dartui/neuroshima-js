let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/app.js', 'dist/')
    .js('src/neuroshima.js', 'dist/');

mix.sass('src/neuroshima.scss', 'dist/');

mix.setPublicPath('dist');

mix.browserSync('http://localhost/neuroshima-js');