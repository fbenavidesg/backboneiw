define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/user/recover.html'
], function($, _, Backbone, Session, recoverTemplate){
  var UserView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{
      'submit #form_recover': 'submit'
    },
    render: function(){
      var data = {};
      var compiledTemplate = _.template( recoverTemplate, data );
      this.$el.html( compiledTemplate );
      this.colDer.html(
        '<div><a class="btn btn-default" href="#ingresar">Ingresar</a></div><br />' + 
        '<div><a class="btn btn-default" href="#crear-cuenta">Registrarse</a></div>'
      );
    },
    submit: function(e){
        e.preventDefault();
        
    }
  });
  return UserView;
});