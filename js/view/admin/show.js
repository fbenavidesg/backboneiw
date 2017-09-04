define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/admin/show.html',
  'model/admin'
], function($, _, Backbone, Session, showTemplate, AdminModel){
  
  var AdminView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    initialize: function(id){
        this.model = new AdminModel();
        this.model.set(id, id);
    },
    render: function(){
        classInstance = this;
        this.model.fetch({
            reset: true,                
            success: function(){       
              var compiledTemplate = _.template( showTemplate)( {admin: classInstance.model.toJSON()} );
              classInstance.$el.html( compiledTemplate );
            },
            error: function(){
                console.log("error");
            }
        });
    }
  });
  return AdminView;

});