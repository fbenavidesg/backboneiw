define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/user/register.html'
], function($, _, Backbone, Session, registerTemplate){
  var UserView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{
      'submit #form_register': 'submit'
    },
    render: function(){
      var data = {};
      var compiledTemplate = _.template( registerTemplate, data );
      this.$el.html( compiledTemplate );
      this.colDer.html(
        '<div><a class="btn btn-default" href="#ingresar">Ingresar</a></div><br />' + 
        '<div><a class="btn btn-default" href="#recuperar-contrasena">Olvidé mi contraseña</a></div>'
      );
    },
    submit: function(e){
        e.preventDefault();
        
    }
  });
  return UserView;
});