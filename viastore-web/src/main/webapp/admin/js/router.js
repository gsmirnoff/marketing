/**
 * Created by SNSukhanov on 09.06.14.
 */

PLATFORM.Route = (function(){
    var view = {},

        _routes = {},

        _startHistory = function(){
            var hash = Tools.hash();
            if(!_routes[hash]){
                hash = '';
                location.hash = '';
            }
            window.addEventListener('hashchange', function(event){
                localStorage.typeEventLoad = event.type;
                var hash = Tools.hash();
                if(!_routes[hash]){
                    hash = '';
                    location.hash = '';
                }

                if(PLATFORM.content){
                    PLATFORM.content.changeContent(_routes[hash]);
                }else{
                    PLATFORM.page.init(_routes);
                }
            }, false);
            if(PLATFORM.content){
                PLATFORM.page.init(_routes[hash]);
            }else{
                PLATFORM.page.init(_routes);
            }

        };

    view.start = function(){
        _routes = workConfig.routes;
        localStorage.typeEventLoad = 'load';
       _startHistory();
    };

    return view;
})();