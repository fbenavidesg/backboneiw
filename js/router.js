// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'lib/backbone/backbone-extra',

  'view/partial/menu',
  
  'view/home',
  //user
  'view/user/login',
  'view/user/register',
  'view/user/recover',
  //offerentEntity
  'view/offerentEntity/list',
  'view/offerentEntity/show',
  'view/user'
], function(
  $, 
  _, 
  Backbone, 
  BackboneExtra, 
  MenuView, 
  HomeView,
  //user 
  LoginView, 
  RegisterView, 
  RecoverView, 
  //offerentEntity
  OfferentEntityListView,
  OfferentEntityView,

  UserView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'showHome',

      //user
      'ingresar': 'login',
      'crear-cuenta': 'register',
      'recuperar-contrasena' : 'recover',

      //offerentEntity
      'entidadesOferentes': 'offerentEntityList',
      'entidadOferente/:id':"offerentEntityShow",

      'usuarios': 'showUsers',
      '*actions': 'defaultAction'
    },
    before : function(router, arguments){
      if( $('ul.nav','header').length <= 0 ){
        var menuView = new MenuView();
        menuView.render();
      }
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

    //user
    app_router.on('route:login', function(){
      var loginView = new LoginView();
      loginView.render();
    });
    app_router.on('route:register', function(){
      var registerView = new RegisterView();
      registerView.render();
    });
    app_router.on('route:recover', function(){
      var recoverView = new RecoverView();
      recoverView.render();
    });

    //offerentEntity
    app_router.on('route:offerentEntityList', function(){
      var offerentEntityListView = new OfferentEntityListView();
      offerentEntityListView.render();
    });
    app_router.on('route:offerentEntityShow', function(id){
      var offerentEntityView = new OfferentEntityView({id:id});
      offerentEntityView.render();
    });


    app_router.on('route:showUsers', function(){
      var userView = new UserView();
      userView.render();
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