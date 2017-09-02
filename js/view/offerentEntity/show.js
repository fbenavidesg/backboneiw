define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/offerentEntity/show.html',
  'model/offerentEntity'
], function($, _, Backbone, Session, showTemplate, OfferentEntityModel){
  
  var OfferentEntityListView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    initialize: function(id){
        this.model = new OfferentEntityModel();
        this.model.set(id, id);
    },
    render: function(){
        classInstance = this;
        this.model.fetch({
            reset: true,                
            success: function(){       
              var compiledTemplate = _.template( showTemplate)( {offerentEntity: classInstance.model.toJSON()} );
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