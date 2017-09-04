define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/offerentEntity/create.html',
  'model/offerentEntity'
], function($, _, Backbone, Session, createTemplate, OfferentEntityModel){
  
  var OfferentEntityCreateView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    render: function(){
        var data = {};
        var compiledTemplate = _.template( createTemplate, data );
        this.$el.html( compiledTemplate );
    }
  });
  return OfferentEntityCreateView;

});