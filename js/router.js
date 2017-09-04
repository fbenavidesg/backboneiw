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
  'view/offerentEntity/create',
  //oferente
  'view/offerent/list',
  'view/offerent/create',
  'view/offerent/show',
  //admin
  'view/admin/list',
  'view/admin/create',
  'view/admin/show',

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
  OfferentEntityCreateView,
  //oferente
  OfferentListView,
  OfferentCreateView,
  OfferentView,
  //admin
  AdminListView,
  AdminCreateView,
  AdminView,

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
      'entidadOferente/ver/:id':"offerentEntityShow",
      'entidadOferente/crear':"offerentEntityCreate",
      'entidadOferente/editar/:id':"offerentEntityEdit",
      //user oferente
      'oferentes/:entity': 'offerentList',
      'oferente/crear/:entity': 'offerentCreate',
      'oferente/ver/:id':"offerentShow",
      'oferente/editar/:id':"offerentEdit",
      //admin
      'administradores': 'adminList',
      'administrador/crear':"adminCreate",
      'administrador/editar/:id':"adminEdit",
      'administrador/ver/:id':"adminShow",

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
    app_router.on('route:offerentEntityCreate', function(){
      var offerentEntityCreateView = new OfferentEntityCreateView();
      offerentEntityCreateView.render();
    });
    app_router.on('route:offerentEntityEdit', function(id){
      var offerentEntityCreateView = new OfferentEntityCreateView({id:id});
      offerentEntityCreateView.render();
    });

    //offerent
    app_router.on('route:offerentList', function(entity){
      var offerentListView = new OfferentListView(entity);
      offerentListView.render();
    });
    app_router.on('route:offerentCreate', function(entity){
      var offerentCreateView = new OfferentCreateView(entity, null);
      offerentCreateView.render();
    });
    app_router.on('route:offerentShow', function(id){
      var offerentView = new OfferentView({id:id});
      offerentView.render();
    });
    app_router.on('route:offerentEdit', function(id){
      var offerentCreateView = new OfferentCreateView(null, id);
      offerentCreateView.render();
    });

    //admin
    app_router.on('route:adminList', function(){
      var adminListView = new AdminListView();
      adminListView.render();
    });
    app_router.on('route:adminCreate', function(){
      var adminCreateView = new AdminCreateView();
      adminCreateView.render();
    });
    app_router.on('route:adminEdit', function(id){
      var adminCreateView = new AdminCreateView({id:id});
      adminCreateView.render();
    });
    app_router.on('route:adminShow', function(id){
      var adminView = new AdminView({id:id});
      adminView.render();
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