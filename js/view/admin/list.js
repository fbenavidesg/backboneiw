define([
  'jquery',
  'underscore',
  'backbone',
  'model/user/Session',
  'text!../../../template/admin/list.html',
  'collection/admin'
], function($, _, Backbone, Session, listTemplate, AdminCollection){
  var AdminListView = Backbone.View.extend({
    el: $('#page'),
    colDer: $('#columder'),
    events:{},
    render: function(){
      classInstance = this;
      var adminCollection = new AdminCollection();
      adminCollection.fetch({
            reset: true,                
            success: function(){       
              var compiledTemplate = _.template( listTemplate)( {admins: adminCollection.toJSON()} );
              classInstance.$el.html( compiledTemplate );
            },
            error: function(){
                console.log("error AdminCollection");
            }
      });
    }
  });
  return AdminListView;
});