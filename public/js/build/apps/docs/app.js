define("apps/docs/app",["jquery","underscore","backbone"],function(e,t,n){var r=n.App.extend({params:{view:{value:"libraries",alias:"v"}},initialize:function(){},render:function(){return n.trigger("app:initialized"),this}});return r});