define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/offerentEntity/list.html',
  'collection/offerentEntity'
], function($, _, Backbone, Session, listTemplate, OfferentEntityCollection){
  var OfferentEntityListView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    render: function(){
      classInstance = this;
      var offerentEntityCollection = new OfferentEntityCollection();
      offerentEntityCollection.fetch({
            reset: true,                
            success: function(){       
              var compiledTemplate = _.template( listTemplate)( {offerentEntitys: offerentEntityCollection.toJSON()} );
              classInstance.$el.html( compiledTemplate );
            },
            error: function(){
                console.log("error");
            }
      });
    }
  });
  return OfferentEntityListView;
});