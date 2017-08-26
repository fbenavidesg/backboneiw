define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/user/login.html'
], function($, _, Backbone, Session, loginTemplate){
  var UserView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{
      'submit #form_login': 'submit'
    },
    render: function(){
      var data = {};
      var compiledTemplate = _.template( loginTemplate, data );
      this.$el.html( compiledTemplate );
      this.colDer.html(
        '<div><a class="btn btn-default" href="#crear-cuenta">Crear una cuenta</a></div><br />' + 
        '<div><a class="btn btn-default" href="#recuperar-contrasena">Olvidé mi contraseña</a></div>'
      );
    },
    submit: function(e){
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        Session.login({
          email : email,
          password : password
        });
    }
  });
  return UserView;
});