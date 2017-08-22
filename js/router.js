// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'lib/backbone/backbone-extra',
  'view/partial/menu',
  'view/home'
], function($, _, Backbone, BackboneExtra, MenuView, HomeView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'home': 'showHome',
      // Default
      '*actions': 'defaultAction'
    },
    before : function(router, arguments){
      var menuView = new MenuView();
      menuView.render();
    },
    after: function(router, arguments){
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;

    app_router.on('route:showHome', function(){
      var homeView = new HomeView();
      homeView.render();
    });
    
    app_router.on('route:defaultAction', function(actions){
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});