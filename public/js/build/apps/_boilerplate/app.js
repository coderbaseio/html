define("apps/_boilerplate/app",["jquery","underscore","backbone"],function(e,t,n){var r=n.App.extend({params:{},initialize:function(){},render:function(){return n.trigger("app:initialized"),this}});return r});