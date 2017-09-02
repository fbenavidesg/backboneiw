define([
  'jquery',
  'underscore',
  'backbone',
  'model/offerentEntity'
], function($, _, Backbone, OfferentEntityModel){
  
  var OfferentEntityCollection = Backbone.Collection.extend({
    model: OfferentEntityModel,
    url: 'json/offerentEntitys.json',
  });
  return OfferentEntityCollection;
  
});