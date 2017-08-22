define([
  'jquery',
  'underscore',
  'backbone',
  'text!../../../template/partial/menu.html'
], function($, _, Backbone, menuPartialTemplante){
  var HomeView = Backbone.View.extend({
    el: $('header'),
    render: function(){
      var data = {};
      var compiledTemplate = _.template( menuPartialTemplante, data );
      this.$el.append( compiledTemplate );
    }
  });
  return HomeView;
});