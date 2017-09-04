define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/offerent/list.html',
  'collection/offerent'
], function($, _, Backbone, Session, listTemplate, OfferentCollection){
  var OfferentListView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    initialize: function(entity){
      this.entity = entity;
      this.offerentCollection = new OfferentCollection(entity);
    },
    render: function(){
      classInstance = this;
      classInstance.offerentCollection.fetch({
            reset: true,                
            success: function(){      
              var compiledTemplate = _.template( listTemplate)( {
                offerents: classInstance.offerentCollection.toJSON(),
                entity: classInstance.entity
              });
              classInstance.$el.html( compiledTemplate );
            },
            error: function(){
                console.log("error OfferentCollection");
            }
      });
    }
  });
  return OfferentListView;
});