/**
 * Created by SNSukhanov on 09.06.14.
 */

var ToolsAdmin = {
    loadTemplate:function(path, options){
      TEMPLATES.changePath(path, function(){
         TEMPLATES.setTemplate({
             template:options.template,
             next:options.callback,
             settings:options.settings
         }, 'loadTemplate');
      });
    },

    title:function(hash){
        var title = document.getElementsByTagName('title');
        var wrapper = document.getElementById('wrapper');
        if(hash === ''){
            hash = 'login';
        }

        title[0].innerText = 'Admin panel | ' + hash.toUpperCase();
        wrapper.className = hash;
    },

    routeHash:function(hash, routes){
       if(hash === routes[hash]){
           PLATFORM[hash].init();
       }else if(hash === ''){
           PLATFORM[routes[hash]].init();
       }else{
           console.log(hash);
       }
    }
};