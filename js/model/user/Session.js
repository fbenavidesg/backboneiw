define([
  'jquery',
  'backbone',
], function($, Backbone){

  var SessionModel = Backbone.Model.extend({
      url : 'http://172.24.99.136',

      initialize : function(){
          //Ajax Request Configuration
          //To Set The CSRF Token To Request Header
          /*$.ajaxSetup({
              headers : {
                  'X-CSRF-Token' : csrf
              }
          });*/

          //Check for sessionStorage support
          if(Storage && sessionStorage){
              this.supportStorage = true;
          }
      },

      login : function(credentials){

      	$.ajax({
	        url: this.url + '/login',
	        type: 'POST',
	        data: JSON.stringify(credentials),
	        success: function(data) {
	            console.log(data)
	        }
	    });

      	 /*var that = this;
          var login = $.ajax({
              url : this.url + '/login',
              data : {'aaa':12},
              type : 'POST'
          });
          login.done(function(response){
              that.set('authenticated', true);
              that.set('user', JSON.stringify(response.user));
              if(that.get('redirectFrom')){
                  var path = that.get('redirectFrom');
                  that.unset('redirectFrom');
                  Backbone.history.navigate(path, { trigger : true });
              }else{
                  Backbone.history.navigate('', { trigger : true });
              }
          });
          login.fail(function(){
              Backbone.history.navigate('ingresar', { trigger : true });
          });*/
      },
  });

  return new SessionModel(); 
});