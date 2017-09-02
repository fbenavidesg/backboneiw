define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  
  var OfferentEntityModel = Backbone.Model.extend({
    defaults:{},
    url: 'json/offerentEntity.json' 
  });
  return OfferentEntityModel;

});