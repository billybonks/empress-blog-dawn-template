'use strict';

module.exports = {
  name: require('./package').name,
  included(app) {
    this._super.included.apply(this, arguments)

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
