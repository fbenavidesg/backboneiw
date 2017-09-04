define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/offerent/create.html',
  'model/offerentEntity'
], function($, _, Backbone, Session, createTemplate, OfferentModel){
  
  var OfferentCreateView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    initialize: function(entity, id){
      this.entity = entity;
      this.id = id;
    },
    render: function(){
        var data = {
          entity:this.entity,
          id:this.id
        };
        var compiledTemplate = _.template( createTemplate, data );
        this.$el.html( compiledTemplate );
    }
  });
  return OfferentCreateView;

});