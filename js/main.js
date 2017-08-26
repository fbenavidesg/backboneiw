require.config({
  baseUrl: 'js',
  paths : {
      jquery : 'lib/jquery/jquery2.2.4.min',
      underscore : 'lib/underscore/underscore-min',
      backbone : 'lib/backbone/backbone-min',
      bootstrap: 'lib/bootstrap/js/bootstrap.min'
  },
  shim:{
      jquery:{
          exports: '$'
      },
      underscore:{
          exports: '_'
      },
      backbone:{
          exports: 'Backbone',
          deps: ['jquery', 'underscore']
      },
      app: {
          deps: ['backbone']
      },
      bootstrap : { 
        deps :['jquery'] 
      }
  },
  urlArgs: function(id, url) {
      var args = 'v=1';
      if (url.indexOf('view.html') !== -1) {
          args = 'v=2'
      }
      return (url.indexOf('?') === -1 ? '?' : '&') + args;
  },
  xhtml: true
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});