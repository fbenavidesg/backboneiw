define([
  'jquery',
  'underscore',
  'backbone',
  'model/user'
], function($, _, Backbone, UserModel){
  
  var UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: 'json/users.json',
  });
  return UserCollection;
  
});