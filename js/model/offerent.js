define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  
  var OfferentModel = Backbone.Model.extend({
    defaults:{},
    url: 'json/offerent.json' 
  });
  return OfferentModel;

});