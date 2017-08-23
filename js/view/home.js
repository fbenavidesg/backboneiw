define([
  'jquery',
  'underscore',
  'backbone',
  'text!../../template/home.html'
], function($, _, Backbone, homeTemplate){
  var HomeView = Backbone.View.extend({
    el: $('#page'),
    render: function(){

      var data = {};
      var compiledTemplate = _.template( homeTemplate, data );
      // Append our compiled template to this Views "el"
      
      this.$el.html( compiledTemplate );
    }
  });
  // Our module now returns our view
  return HomeView;
});

