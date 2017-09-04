define([
  'jquery',
  'underscore',
  'backbone',
  'model/offerent'
], function($, _, Backbone, OfferentModel){
  
  var OfferentCollection = Backbone.Collection.extend({
    model: OfferentModel,
    url: function(){
      return 'json/offerents'+ this.entity +'.json';
    },
    initialize: function(entity){
    	this.entity = entity;
    }
  });
  return OfferentCollection;
  
});