'use strict';
const CssImport = require('postcss-import')

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  options: {
    /**
     * This has to be included in order to get the dummy app working,
     * but it may have a negative impact on consuming apps. At the same time
     * it may autoconfigure consuming apps that don't care
     */
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: CssImport },
        ]
      }
    }
  },

  included(app) {
    this._super.included.apply(this, arguments)
    app.options = app.options || {};
    // this is required to actual build the addon code for vendor.css
    if(!app.options.postcssOptions) {
      app.options.postcssOptions = {
        compile: {
          enabled: true,
          plugins: [
            { module: CssImport },
          ]
        }
      }
    }
    if(!app.options['ember-prism']) {
      app.options['ember-prism'] = {
        theme: 'tomorrow',

        components: [
          'apacheconf',
          'bash',
          'css',
          'handlebars',
          'http',
          'javascript',
          'json',
          'markup-templating',
          'ruby',
          'scss'
        ],

        plugins: ['line-numbers', 'normalize-whitespace']
      }
    }
  },

  contentFor(type){
    if(type == 'head') {
      return `<link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Muli">`
    }
  }

};
