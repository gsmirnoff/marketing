/**
 * Created by SNSukhanov on 20.06.14.
 */

PLATFORM.projects = (function(){
    var view = {},
        _el,
        _data = {
            title:'Viastore',
            avatarId:null,
            description:null
        },

        _settings = {},

        _render = function(){

        },

        _setProjects = function(data){
          REQUEST.initRequest({
              url:'/api/project',
              data:data,
              success:function(r){
                  console.log(r);
              }
          }, 'POST', 'json');
        },

        _getProjects = function(){
            REQUEST.initRequest({
                url:'api/project',
                success:function(r){
                    console.log(r);
                }
            }, 'GET', 'json');
        };

    view.init = function(route){
       _setProjects(_data);
    };

    return view;
})();