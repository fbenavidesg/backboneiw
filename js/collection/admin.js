define([
  'jquery',
  'underscore',
  'backbone',
  'model/admin'
], function($, _, Backbone, AdminModel){
  
  var AdminCollection = Backbone.Collection.extend({
    model: AdminModel,
    url: 'json/admins.json',
  });
  return AdminCollection;
  
});