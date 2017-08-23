define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  
  var UserModel = Backbone.Model.extend({
    defaults:{
    	name: "Harry Potter"
    } 
  });
  return UserModel;

});