define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/user/register.html',
  'model/admin'
], function($, _, Backbone, Session, createTemplate, AdminModel){
  
  var AdminCreateView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    render: function(){
        var data = {};
        var compiledTemplate = _.template( createTemplate, data );
        this.$el.html( compiledTemplate );
    }
  });
  return AdminCreateView;

});