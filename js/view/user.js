define([
  'jquery',
  'underscore',
  'backbone',
  'text!../../template/user.html',
  'collection/user'
], function($, _, Backbone, homeTemplate, UserCollection){
  var UserView = Backbone.View.extend({
    el: $('#page'),
    render: function(){
      classInstance = this;   
      var userCollection = new UserCollection();
      userCollection.fetch({
            reset: true,                
            success: function(){       
              var compiledTemplate = _.template( homeTemplate)( {users: userCollection.toJSON()} );
              classInstance.$el.html( compiledTemplate );
            },
            error: function(){
                console.log("error");
            }
        });
      

    }
  });
  return UserView;
});