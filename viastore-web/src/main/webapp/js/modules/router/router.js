/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 04.04.14
 * Time: 12:56
 * To change this template use File | Settings | File Templates.
 */


APP.Router = (function(){
    var view = {},

        routes = {
            '':'index',
            '#':'index',
            '#index':'index',
            '#solutions':'solutions',
            '#admin':'admin'
        },

        _token,

        _render = function(e){

        },

        _loadPage = function(page){
            _hashChange(page);
            APP.Page.init(page);
        },

        _listenChangeLocation = function(e){
            var hash = location.hash;
            if(routes[hash] != undefined){
                if(_token.accessToken){
                    _loadPage(routes[hash]);
                }else{
                   if(routes[hash] == 'admin'){
                       _loadPage('index');
                   }else{
                       _loadPage(routes[hash]);
                   }
                }
            }else{
                _loadPage('NotFound');
            }
        },

        _hashChange = function(hash){
            location.hash = hash;
        },

        _titleChange = function(){

        },

        _handlers = function(){
           $(window).on('hashchange load', function(event){
               console.log(event);
               _token = APP.getToken();
               _render(event);
               _listenChangeLocation(event);
           });
        };

    view.start = function(){
       _handlers();
    };

    return view;
})();