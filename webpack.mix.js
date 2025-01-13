// This file is the configuration for Laravel Mix.
// Laravel Mix is an API layer over webpack, a module bundler that prepares JS, CSS and other assets for the browser

const mix = require('laravel-mix');

// Process the main JS file (src/js/app.js) and save the result to web/dist/js
mix.js('src/js/app.js', 'web/dist/js') 

   // Process the main CSS file (src/css/app.css) and save the result to web/dist/css
   .postCss('src/css/app.css', 'web/dist/css', [ 
      require('postcss-import'), // allows using @import in CSS files
      require('tailwindcss'),    // adds Tailwind CSS features
      require('autoprefixer'),   // automatically adds browser-specific prefixes for CSS
   ])

   // Set the base folder where the processed files will be saved
   .setPublicPath('web');
