define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/offerent/show.html',
  'model/offerent'
], function($, _, Backbone, Session, showTemplate, OfferentModel){
  
  var OfferentListView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    initialize: function(id){
        this.model = new OfferentModel();
        this.model.set(id, id);
    },
    render: function(){
        classInstance = this;
        this.model.fetch({
            reset: true,                
            success: function(){       
              var compiledTemplate = _.template( showTemplate)( {offerent: classInstance.model.toJSON()} );
              classInstance.$el.html( compiledTemplate );
            },
            error: function(){
                console.log("error");
            }
        });
    }
  });
  return OfferentListView;

});