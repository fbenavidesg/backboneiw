define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  
  var AdminModel = Backbone.Model.extend({
    defaults:{},
    url: 'json/admin.json' 
  });
  return AdminModel;

});